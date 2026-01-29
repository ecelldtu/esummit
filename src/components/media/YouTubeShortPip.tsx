"use client";

import React from "react";

type YouTubeShortPipProps = {
  /** YouTube video id (the `v` part / embed id). Example: "4XAtPibbVW0" */
  videoId: string;
  /** Accessible title for the iframe */
  title?: string;
  /** Optional extra className for outer spacing overrides */
  className?: string;
};

export default function YouTubeShortPip({
  videoId,
  title = "YouTube video",
  className = "",
}: YouTubeShortPipProps) {
  // NOTE: YouTube controls some overlays (like channel info) and they can't be fully removed
  // without using the full YouTube player UI. We still use available embed params to reduce chrome.
  const params = new URLSearchParams({
  autoplay: "0",
    mute: "1",
    playsinline: "1",
    // minimize in-player YouTube branding where supported
    modestbranding: "1",
  // allow user to unmute / control volume
  controls: "1",
    // reduce related video personalization on end screen
    rel: "0",
    // keep it clean: no fullscreen button is still allowed via allowFullScreen
    // showinfo is deprecated but harmless if ignored
    showinfo: "0",
  });

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;

  return (
    <section
      aria-label={title}
      className={`w-full px-4 pt-14 pb-4 sm:pt-20 sm:pb-6 ${className}`}
    >
      <div className="mx-auto flex max-w-7xl justify-center">
        <div
          className={
            "relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl backdrop-blur " +
            "w-[min(92vw,360px)]"
          }
        >
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

          {/* 9:16 frame for Shorts */}
          <div className="relative aspect-[9/16]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={src}
              title={title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
