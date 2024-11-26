'use client';
import Paragraph from '../../components/Paragraph';
import Word from '../../components/Word';
import Character from '../../components/Character';
import Meteors from "../../components/magicui/meteors";

const paragraph = "For 18 years, E-Cell DTU has championed an entrepreneurial ethos, guiding students with the expertise of venture capitalists and industry leaders. Our mission is to nurture 'CREATORS' transcending traditional education by promoting values of productivity, innovation, and independent thinking. E-Cell DTU inspires 'CHANGE' by instilling out-of-the-box ideas and equipping individuals to be architects of transformation. We are dedicated to shaping engineers who actively contribute to a future defined by innovation and impact."
export default function MeteorDemo() {
    const words = paragraph.split(" ")
    return (
        <div className="relative flex h-auto w-screen flex-col mt-32 border-none items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
            {/* <Meteors number={40} /> */}
            <span className="pointer-events-none font-Nova whitespace-pre-wrap text-white bg-clip-text text-center text-4xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 mt-20">
                Why E-Cell DTU
            </span>
            {/* <p className="text-center max-w-[80%] md:max-w-[60%] my-12 text-lg md:text-3xl font-Darker text-[#fff]">
            </p> */}
              <main>
        <div style={{height: "0vh"}}></div>
        <Paragraph paragraph={paragraph}/>
    </main>
        </div>
    );
}
