'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Ref,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

// Keep all ScrollTrigger animations transform-only.
// This helps mobile GPUs and reduces main-thread layout work.
if (typeof window !== 'undefined') {
  // Safer defaults for touch devices.
  ScrollTrigger.config({ ignoreMobileResize: true });
}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ force3D: true });
  ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true });
}

function useMergeRefs<T>(...refs: (Ref<T> | undefined)[]) {
  return useMemo(() => {
    if (refs.every((ref) => ref == null)) return null;
    return (node: T) => {
      refs.forEach((ref) => {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref != null) {
          (ref as React.MutableRefObject<T | null>).current = node;
        }
      });
    };
  }, [refs]);
}

function useResponsiveValue(baseValue: number, mobileValue: number) {
  const [value, setValue] = useState(baseValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setValue(window.innerWidth < 768 ? mobileValue : baseValue);
    };

    handleResize();

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [baseValue, mobileValue]);

  return value;
}

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    handleResize();

    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
}

function useHasCoarsePointer() {
  const [coarse, setCoarse] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const query = window.matchMedia('(pointer: coarse)');
    const update = () => setCoarse(query.matches);
    update();

    // Safari still supports addListener/removeListener.
    if (typeof query.addEventListener === 'function') {
      query.addEventListener('change', update);
      return () => query.removeEventListener('change', update);
    }

    query.addListener(update);
    return () => query.removeListener(update);
  }, []);

  return coarse;
}

function useIsLowPowerDevice() {
  const [isLowPower, setIsLowPower] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const nav = navigator as any;
    const deviceMemory: number | undefined = nav.deviceMemory;
    const cores: number | undefined = nav.hardwareConcurrency;

    const low =
      (typeof deviceMemory === 'number' && deviceMemory <= 4) ||
      (typeof cores === 'number' && cores <= 4);
    setIsLowPower(low);
  }, []);

  return isLowPower;
}

export interface RadialScrollGalleryProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Render function that returns the array of items to be placed on the wheel.
   * Receives the currently `hoveredIndex` to allow for parent-controlled hover states.
   */
  children: (hoveredIndex: number | null) => ReactNode[];
  /**
   * The vertical scroll distance (in pixels) required to complete one full 360-degree rotation.
   * Defaults to 2500.
   */
  scrollDuration?: number;
  /**
   * Percentage of the circle visible above the fold (0-100).
   * Determines how "deep" the wheel is buried. Defaults to 45.
   */
  visiblePercentage?: number;
  /** Radius of the circle on desktop devices (>=768px). */
  baseRadius?: number;
  /** Radius of the circle on mobile devices (<768px). */
  mobileRadius?: number;
  /**
   * GSAP ScrollTrigger start position string (e.g., "top 80%", "center center").
   */
  startTrigger?: string;
  /** Callback fired when an item is clicked or selected via keyboard. */
  onItemSelect?: (index: number) => void;
  /** Rotational direction of the wheel. */
  direction?: 'ltr' | 'rtl';
  /** Disables all interactions and applies a grayscale effect. */
  disabled?: boolean;
}

/**
 * A scroll-driven interaction that rotates items along a large, partially hidden circle.
 * The component pins itself to the viewport while the user scrolls through the rotational progress.
 */
export const RadialScrollGallery = forwardRef<
  HTMLDivElement,
  RadialScrollGalleryProps
>(
  (
    {
      children,
      scrollDuration = 2500,
      visiblePercentage = 45,
      baseRadius = 550,
      mobileRadius = 220,
      className = '',
      startTrigger = 'center center',
      onItemSelect,
      direction = 'ltr',
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const pinRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLUListElement>(null);
    const childRef = useRef<HTMLLIElement>(null);

    const mergedRef = useMergeRefs(ref, pinRef);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [childSize, setChildSize] = useState<{ w: number; h: number } | null>(
      null
    );
    const [isMounted, setIsMounted] = useState(false);

    const currentRadius = useResponsiveValue(baseRadius, mobileRadius);
    const circleDiameter = currentRadius * 2;

    const isMobile = useIsMobile(768);
  const hasCoarsePointer = useHasCoarsePointer();
  const isLowPower = useIsLowPowerDevice();
    // Phones can feel sluggish with long pinned scroll distances.
    // Keep it shorter on touch devices so users can scroll past easily.
    const effectiveScrollDuration = isMobile || hasCoarsePointer
      ? Math.max(scrollDuration * 0.6, 900)
      : scrollDuration;

    const { visibleDecimal, hiddenDecimal } = useMemo(() => {
      const clamped = Math.max(10, Math.min(100, visiblePercentage));
      const v = clamped / 100;
      return { visibleDecimal: v, hiddenDecimal: 1 - v };
    }, [visiblePercentage]);

    const childrenNodes = useMemo(
      () => React.Children.toArray(children(hoveredIndex)),
      [children, hoveredIndex]
    );
    const childrenCount = childrenNodes.length;

    // Measure the first child to determine layout buffers.
    // This ensures the container is tall enough to prevent clipping as items rotate.
    useEffect(() => {
      setIsMounted(true);

      if (!childRef.current) return;

      const observer = new ResizeObserver((entries) => {
        let hasChanged = false;
        for (const entry of entries) {
          setChildSize({
            w: entry.contentRect.width,
            h: entry.contentRect.height,
          });
          hasChanged = true;
        }
        if (hasChanged) {
          ScrollTrigger.refresh();
        }
      });

      observer.observe(childRef.current);
      return () => observer.disconnect();
    }, [childrenCount]);

    useGSAP(
      () => {
        if (!pinRef.current || !containerRef.current || childrenCount === 0)
          return;

        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
        const shouldAnimate = !prefersReducedMotion;

        // Extra perf guard: pinned + scrubbed animations are often janky on mobile.
        // We'll still animate, but avoid pinning on mobile/coarse-pointer.
          const shouldPin = !isMobile && !hasCoarsePointer;

        if (shouldAnimate) {
          if (!isMobile) {
            // Desktop: keep ticker stable for smoother scroll-linked animations.
            gsap.ticker.lagSmoothing(0);
            gsap.ticker.fps(60);
          } else {
            gsap.ticker.fps(30);
          }
          gsap.fromTo(
            containerRef.current.children,
            { scale: 0, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 1.2,
              ease: 'back.out(1.2)',
              stagger: 0.05,
              scrollTrigger: {
                trigger: pinRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Use a transform-only update loop via quickSetter for maximum smoothness.
          const setRotation = gsap.quickSetter(containerRef.current, 'rotation', 'deg');
          gsap.set(containerRef.current, {
            force3D: true,
            transformOrigin: '50% 50%',
            willChange: 'transform',
          });

          ScrollTrigger.create({
            trigger: pinRef.current,
            start: startTrigger,
            end: `+=${effectiveScrollDuration}`,
            scrub: shouldPin ? 1.1 : 0.2,
            pin: shouldPin,
            pinSpacing: shouldPin,
            anticipatePin: shouldPin ? 1 : 0,
            invalidateOnRefresh: true,
            // Smooth scroll on touch (prevents the "stuck" feel).
            fastScrollEnd: true,
            preventOverlaps: true,
            onUpdate: (self) => {
              // 360 deg per full progress.
              setRotation(self.progress * 360);
            },
          });
        } else {
          gsap.set(containerRef.current, { rotation: 0, clearProps: 'transform' });
        }
      },
      {
        scope: pinRef,
        dependencies: [
          scrollDuration,
          effectiveScrollDuration,
          currentRadius,
          startTrigger,
          childrenCount,
          isMobile,
          isLowPower,
          hasCoarsePointer,
        ],
      }
    );

    if (childrenCount === 0) return null;

    // Calculate the total height required for the pinned container.
    // We need (Visible Circle Height) + (Half Item Height) + (Buffer) to ensure items aren't cut off by the mask.
    const scaleFactor = 1.25;
    const calculatedBuffer = childSize
      ? childSize.h * scaleFactor - childSize.h + 60
      : 150;

    const visibleAreaHeight = childSize
      ? // On mobile, add extra headroom because shorter viewports + safe areas make clipping very noticeable.
        circleDiameter * visibleDecimal +
        childSize.h / 2 +
        calculatedBuffer +
        (isMobile ? 320 : 0)
      : circleDiameter * visibleDecimal + (isMobile ? 520 : 200);

    return (
      <div
        ref={mergedRef}
        className={`min-h-screen w-full relative flex items-center justify-center overflow-hidden ${className}`}
        style={
          // Mobile-only: keep touch scroll responsive without creating a nested scroll region.
          isMobile
            ? ({
                touchAction: 'pan-y',
              } as React.CSSProperties)
            : undefined
        }
        {...rest}
      >
        <div
          className='relative w-full overflow-hidden'
          style={{
            height: `${visibleAreaHeight}px`,
            // The mask looks nice on desktop. On mobile we keep a softer fade (mostly opaque)
            // so nothing important gets clipped, while still hiding the very bottom edge.
            ...(isMobile
              ? {
                  maskImage:
                    'linear-gradient(to top, black 0%, black 88%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to top, black 0%, black 88%, transparent 100%)',
                }
              : {
                  maskImage:
                    'linear-gradient(to top, transparent 0%, black 40%, black 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to top, transparent 0%, black 40%, black 100%)',
                }),
          }}
        >
          <ul
            ref={containerRef}
            className={`
              absolute left-1/2 -translate-x-1/2 will-change-transform m-0 p-0 list-none
              transition-opacity duration-500 ease-out
              ${disabled ? 'opacity-50 pointer-events-none grayscale' : ''}
              ${isMounted ? 'opacity-100' : 'opacity-0'}
            `}
            dir={direction}
            style={{
              width: circleDiameter,
              height: circleDiameter,
              bottom: -(circleDiameter * hiddenDecimal),
            }}
          >
            {childrenNodes.map((child, index) => {
              const angle = (index / childrenCount) * 2 * Math.PI;
              let x = currentRadius * Math.cos(angle);
              const y = currentRadius * Math.sin(angle);

              if (direction === 'rtl') {
                x = -x;
              }

              const rotationAngle = (angle * 180) / Math.PI;
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              return (
                <li
                  key={index}
                  ref={index === 0 ? childRef : null}
                  className='absolute top-1/2 left-1/2'
                  style={{
                    zIndex: isHovered ? 100 : 10,
                    transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${
                      rotationAngle + 90
                    }deg)`,
                  }}
                >
                  {/* 
                    Using a generic div with role="button" instead of <button> 
                    to allow passing interactive children (like <Link>) without creating invalid HTML nesting.
                  */}
                  <div
                    role='button'
                    tabIndex={disabled ? -1 : 0}
                    onClick={() => !disabled && onItemSelect?.(index)}
                    onKeyDown={(e) => {
                      if (disabled) return;
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onItemSelect?.(index);
                      }
                    }}
                    onMouseEnter={() => !disabled && !hasCoarsePointer && setHoveredIndex(index)}
                    onMouseLeave={() => !disabled && !hasCoarsePointer && setHoveredIndex(null)}
                    onPointerEnter={() => !disabled && !hasCoarsePointer && setHoveredIndex(index)}
                    onPointerLeave={() => !disabled && !hasCoarsePointer && setHoveredIndex(null)}
                    onFocus={() => !disabled && !hasCoarsePointer && setHoveredIndex(index)}
                    onBlur={() => !disabled && !hasCoarsePointer && setHoveredIndex(null)}
                    className={`
                      block cursor-pointer outline-none text-left
                      focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                      rounded-xl transition-transform duration-300 ease-out will-change-transform
                      ${
                        isHovered
                          ? isMobile
                            ? hasCoarsePointer
                              ? 'scale-[1.03] -translate-y-1'
                              : 'scale-[1.05] -translate-y-2'
                            : 'scale-125 -translate-y-8'
                          : 'scale-100'
                      }
                      ${
                        // Filters are expensive on mobile GPUs. Keep them desktop-only.
                        isAnyHovered && !isHovered
                          ? isMobile
                            ? 'opacity-90'
                            : isLowPower
                              ? 'opacity-70'
                              : 'blur-[2px] opacity-40 grayscale'
                          : 'opacity-100'
                      }
                    `}
                  >
                    {child}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
);

RadialScrollGallery.displayName = 'RadialScrollGallery';