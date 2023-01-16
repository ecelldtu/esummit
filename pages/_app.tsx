import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <div className="bg-background font-poppins w-[100%] m-0">
      <div className=" top-0 right-0 absolute justify-end flex-row">
        <Image
          height={550}
          width={550}
          src="/celestial_and_space.png"
          alt=""
        />
      </div>

      <Component {...pageProps} />
    </div>
  );
}
