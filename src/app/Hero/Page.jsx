import Image from "next/image";

const Page = () => {
  return (
    <section id="hero" className="relative w-full">
      {/*
        Mobile: container matches the image's native aspect ratio (1280×836)
        so it fills perfectly — no cropping, no margins.
        Desktop: full-viewport (100dvh) with cover for edge-to-edge.
      */}

      {/* Mobile: vertically centered, aspect-ratio container */}
      <div className="relative z-[100000] w-full min-h-[100dvh] flex items-center md:hidden bg-transparent">
        <div className="relative w-full" style={{ aspectRatio: '1280 / 836' }}>
          <Image
            src="/images/hero4.png"
            alt="Hero"
            fill
            priority
            quality={90}
            style={{ objectFit: "fill" }}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Desktop/tablet: full viewport height with cover */}
      <div className="relative z-[100000] w-full min-h-[100dvh] h-[100dvh] overflow-hidden bg-transparent hidden md:block">
        <Image
          src="/images/hero4.png"
          alt="Hero"
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", objectPosition: "center center" }}
          sizes="(min-width: 768px) 100vw"
        />
      </div>
    </section>
  );
};

export default Page;
