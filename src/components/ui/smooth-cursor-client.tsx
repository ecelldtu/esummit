"use client";

import { useEffect, useState } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function SmoothCursorClient() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(media.matches && !reduceMotion.matches);
    };

    update();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", update);
      reduceMotion.addEventListener("change", update);
      return () => {
        media.removeEventListener("change", update);
        reduceMotion.removeEventListener("change", update);
      };
    }

    // Safari fallback
    media.addListener(update);
    reduceMotion.addListener(update);
    return () => {
      media.removeListener(update);
      reduceMotion.removeListener(update);
    };
  }, []);

  if (!enabled) return null;

  return <SmoothCursor />;
}
