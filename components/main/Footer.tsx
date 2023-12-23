import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png"
import fb from "../../public/fb.png"
import insta from "../../public/insta.png"
import ln from "../../public/ln.png"

const Footer = () => {
    return <div className="bg-[#0A0702]" id="Footer">
        <footer className=" bg-violet-900/80 z-[-10]">
            <div className="relative bottom-10  pt-28 md:pt-32 md:pb-1 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 md:justify-start items-start content-start">
                    <div className="px-10 pb-4">
                        <Link href="/"><Image src={Logo} height={"100"} width={"200"} alt={"logo"} className="" /></Link>
                    </div>
                    {/* <div className="px-10 py-4 md:py-0 flex flex-col">
                        <h1 className="font-poppins font-bold text-xl md:text-3xl md:mb-4 font-Queensides">Quick Access</h1>

                        <div className="md:text-xl flex flex-col md:flex-row font-Para font-semibold">
                            <span className="my-2 md:mr-6"><Link href={'/'}>Home</Link></span>
                            <span className="my-2 md:mr-6"><Link href={'/About'}>About</Link></span>
                            <span className="my-2 md:mr-6"><Link href={'/Events'}>Events</Link></span>
                        </div>
                        <div className="md:text-xl flex flex-col md:flex-row flex-start font-Para font-semibold">
                            <span className="my-2 md:basis-1/3 md:mr-6"><Link href={'/Team'}>Team</Link></span>
                            <span className="my-2 md:basis-1/3 md:mr-6"><Link href={'/Sponsors'}>Sponsors</Link></span>
                            <span className="my-2 md:basis-1/3 md:mr-6"><Link href={'/Contact'}>Contact</Link></span>
                        </div>
                    </div> */}
                    <div className="px-10 py-4 md:py-0">
                        <h1 className="font-poppins font-bold text-xl md:text-3xl font-Queensides">Follow Us</h1>
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
                        <h1 className="font-poppins font-bold text-xl md:text-3xl font-Queensides">Contact Us</h1>
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