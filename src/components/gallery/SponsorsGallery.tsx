"use client";

import React from "react";
import Image from "next/image";
import { RadialScrollGallery } from "@/components/ui/portfolio-and-image-gallery";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

const items: GalleryItem[] = [
  { id: "main", src: "/images/main.jpg", alt: "Gallery image" },
  { id: "11", src: "/images/11.jpg", alt: "Gallery image" },
  { id: "g32", src: "/images/g32.png", alt: "Gallery image" },
  { id: "10", src: "/images/10.jpg", alt: "Gallery image" },
  { id: "g46", src: "/images/g46.png", alt: "Gallery image" },
  { id: "1", src: "/images/1.jpg", alt: "Gallery image" },
  { id: "g41", src: "/images/g41.png", alt: "Gallery image" },
];

export default function SponsorsGallery() {
  return (
    <section aria-label="Highlights" className="w-full pb-6 sm:pb-10">
      <RadialScrollGallery
        className="!min-h-[620px] sm:!min-h-[640px]"
        baseRadius={420}
        mobileRadius={145}
        visiblePercentage={70}
        scrollDuration={2400}
      >
        {(hoveredIndex) =>
          items.map((item, index) => {
            const isActive = hoveredIndex === index;

            return (
              <article
                key={item.id}
                className="group relative h-[220px] w-[160px] sm:h-[280px] sm:w-[200px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-xl"
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 160px, 200px"
                    className={
                      "object-cover transition-transform duration-700 ease-out " +
                      (isActive ? "scale-110" : "scale-100")
                    }
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="absolute inset-0 flex items-end p-4">
                  <div
                    className={
                      "h-0.5 rounded bg-white/80 transition-all duration-500 " +
                      (isActive ? "w-full opacity-100" : "w-0 opacity-0")
                    }
                  />
                </div>
              </article>
            );
          })
        }
      </RadialScrollGallery>
    </section>
  );
}
