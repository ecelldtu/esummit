import BoxReveal from "../../components/magicui/box-reveal";

export default function BoxRevealDemo() {
    return (
        <div className="size-full w-full flex my-24 sm:my-32 flex-col items-center justify-center overflow-hidden pt-8 text-center">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-4xl text-white md:text-7xl my-4 font-semibold font-Kalamayka mt-24">
                    About Us<span className="text-[#5046e6]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-3 font-Kalamayka text-white max-w-[92%] md:max-w-[62%] mx-auto text-base md:text-2xl text-center font-medium leading-relaxed md:leading-[1.8] tracking-[0.01em] text-balance">
                    E-Cell DTU presents its annual flagship event E-SUMMIT'26 One of the biggest Entrepreneurship summits in India, E-Summit will bring to you a series of enthralling events. from panel discussions with distinguished dignitaries.to exciting competitions like B-plan, Case study and Hackathon, along with a spectacular band night and comedy night, the level of grandeur will be unparalleled
                </h2>
            </BoxReveal>
        </div>
    );
}
