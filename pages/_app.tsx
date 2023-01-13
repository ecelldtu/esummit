import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className = "bg-background font-poppins">
      {/* <Navbar/> */}
      <div className=" top-[0px] right-0 absolute shadow-none">
        <Image height={600} width={600} src="/celestial_and_space.png" alt="" />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
