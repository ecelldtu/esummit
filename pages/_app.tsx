import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import {Audiowide} from '@next/font/google'

// const audiowide= Audiowide({
//   subsets:['latin'],
  
// });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      {/* <div className=" top-0 right-0 absolute w-screen h-[550px]">
        <Image width={550} height={550} src="/celestial_and_space.png" alt="" />
      </div> */}

      <Component {...pageProps} />
    </div>
  );
}
