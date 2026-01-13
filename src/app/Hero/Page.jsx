import Image from "next/image";

const Page = () => {
  return (
    <section id="hero" className="relative w-full">
      {/*
        Hero covers the dynamic viewport (100dvh) to avoid mobile UI clipping.
        On phones, we prefer "contain" so the full artwork is visible (no cropping).
        On md+ screens, we switch to "cover" for an edge-to-edge look.
      */}
  <div className="relative z-[100000] w-full min-h-[100dvh] h-[100dvh] overflow-hidden bg-transparent">
        <div className="relative w-full h-full">
          {/* Mobile (default): show full image */}
          <div className="relative w-full h-full md:hidden">
            <Image
              src="/images/hero1.png"
              alt="Hero"
              fill
              priority
              style={{ objectFit: "contain", objectPosition: "50% 60%" }}
              sizes="100vw"
            />
          </div>

          {/* Desktop/tablet: fill viewport */}
          <div className="relative w-full h-full hidden md:block">
            <Image
              src="/images/hero1.png"
              alt="Hero"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "50% 60%" }}
              sizes="(min-width: 768px) 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
