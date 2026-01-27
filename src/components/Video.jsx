import { useEffect, useState } from "react";

const VideoBackground = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    let last = -1;

    const update = () => {
      raf = 0;
      const y = window.scrollY || 0;
      // Only update state when it actually changes.
      const next = y > 0;
      if (next !== last) {
        last = next;
        setIsScrolled(next);
      }
    };

    const handleScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    // Prime initial state.
    update();

    // Passive listener prevents scroll blocking on mobile.
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener on component unmount
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <video
      className={`video-background ${isScrolled ? "fixed inset-0" : "absolute inset-0"} w-full h-full object-cover`}
      muted
      loop
      playsInline
      aria-hidden="true"
    >
      <source src="/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
