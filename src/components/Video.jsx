import React, { useState, useEffect } from "react";

const VideoBackground = () => {
  const [videoSrc, setVideoSrc] = useState(null); // Initial value is null for SSR

  useEffect(() => {
    // Function to determine video source based on screen size
    const updateVideoSrc = () => {
      if (window.innerWidth <= 640) {
        setVideoSrc("/Bg2.mp4");
      } else {
        setVideoSrc("/Bg.mp4");
      }
    };

    // Update video source on the client after the component mounts
    updateVideoSrc();
    window.addEventListener("resize", updateVideoSrc); // Update on resize

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", updateVideoSrc);
  }, []);

  if (!videoSrc) return null; // Prevents rendering on the server

  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
