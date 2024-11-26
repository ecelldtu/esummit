import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png"
import fb from "../../public/images/fb.png"
import insta from "../../public/images/insta.png"
import ln from "../../public/images/ln.png"

const Footer = () => {
    return <div className="bg-[#0A0702] z-[500]" id="Footer">
         <h2 className='text-center text-5xl w-full text-white bg-violet-900/80 py-4 font-CyberGraph'>MAP</h2>
            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Delhi%20Technological%20University+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="screen"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 m-auto"
            ></iframe>
        <footer className=" bg-violet-900/80 z-[1000]">
            <div className="relative bottom-10  pt-28 md:pt-32 md:pb-1 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 md:justify-start items-start content-start">
                    <div className="px-10 pb-4">
                        <Link href="/"><Image src={Logo} height={"100"} width={"200"} alt={"logo"} className="" /></Link>
                    </div>
                    <div className="px-10 py-4 md:py-0">
                        <h2 className="font-poppins font-bold text-xl md:text-3xl font-Queensides">Follow Us</h2>
                        <div className="flex flex-row gap-4 py-3 font-Para font-semibold">
                            <Link href={'https://www.instagram.com/ecelldtu/'}>
                                <Image width={40} height={50}
                                    src={insta}

                                    alt="insta logo"
                                    className="h-auto mr-2 scale-110 text-white cursor-pointer"
                                /></Link>
                            <Link href={'https://www.linkedin.com/company/ecelldtu/mycompany/'}>
                                <Image width={40} height={50}
                                    src={ln}

                                    alt="linkedin logo"
                                    className="h-auto mr-2 scale-110 text-white cursor-pointer"
                                /></Link>
                            <Link href={'https://www.facebook.com/ECellDTU'}>
                                <Image width={40} height={50}
                                    src={fb}

                                    alt="facebook logo"
                                    className="h-auto mr-2 scale-110 text-white cursor-pointer"
                                /></Link>
                        </div>
                    </div>
                    <div className="px-10">
                        <h2 className="font-poppins font-bold text-xl md:text-3xl font-Queensides">Contact Us</h2>
                        <h4 className="py-1 md:text-base flex flex-col font-Para font-semibold">
                            <div>info@ecelldtu.in</div>
                            <div>Delhi Technological University</div>
                            <div>Shahbad Daulatpur, Main Bawana Road, Delhi-110042</div>
                        </h4>
                    </div>
                </div>
            </div>
        </footer>

        <div className="flex flex-col border-t-2 bg-violet-900/80 py-5 font-semibold px-10 md:text-lg md:pb-6 text-white md:items-center md:flex-row md:justify-between">
            <div className="">
                © Copyright E-Cell DTU.
            </div>
            <div className="pt-3 pb-5">
                All <span className="text-primary-orange ">Rights</span> Reserved.
            </div>
        </div>
    </div>
};

export default Footer;