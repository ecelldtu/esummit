"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  /** Render when the element is within this distance from the viewport (e.g. "400px"). */
  rootMargin?: string;
  /** If true, unmount again when it leaves the viewport. Default false (mount once). */
  unmountOnExit?: boolean;
  /** Placeholder shown before mount. */
  placeholder?: React.ReactNode;
  children: React.ReactNode;
};

/**
 * Mounts children only when near the viewport using IntersectionObserver.
 * Great for heavy sections (3D, shaders, carousels, GSAP sections, videos).
 */
export default function LazyMount({
  rootMargin = "400px",
  unmountOnExit = false,
  placeholder = null,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IO isn't supported (rare), just mount.
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (!unmountOnExit) io.disconnect();
        } else if (unmountOnExit) {
          setVisible(false);
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, unmountOnExit]);

  return <div ref={ref}>{visible ? children : placeholder}</div>;
}
