import Image from 'next/image';

const Page = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0">
        {/* Large Screen Image */}
        <div className="hidden lg:block w-full h-full">
          <Image
            src="/images/hero.png"
            alt="Large Screen Image"
            layout="fill"
            objectFit="contain"
            className="-z-100"
          />
        </div>

        {/* Medium Screen Image */}
        <div className="hidden md:block lg:hidden w-full h-full">
          <Image
            src="/images/hero.png"
            alt="Medium Screen Image"
            layout="fill"
            objectFit="contain"
            className="-z-100"
          />
        </div>

        {/* Small Screen Image */}
        <div className="md:hidden w-full h-full">
          <Image
            src="/images/herophone.png"
            alt="Small Screen Image"
            layout="fill"
            objectFit="cover"
            className="-z-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
