import { useEffect, useState } from "react";

const VideoBackground = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When scroll position is greater than 0, the video will stay fixed
      if (window.scrollY >= 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(true);
      }
    };

    // Add event listener on scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <video
      className={`video-background ${isScrolled ? "fixed" : "absolute"}`}
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
