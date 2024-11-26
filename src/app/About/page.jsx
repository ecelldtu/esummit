import BoxReveal from "../../components/magicui/box-reveal";

export default function BoxRevealDemo() {
    return (
        <div className="size-full w-full flex my-40 flex-col items-center justify-center overflow-hidden pt-8 mt-[100vh] text-center">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <p className="text-4xl text-white md:text-7xl my-4 font-semibold font-Nova mt-24">
                    About Us<span className="text-[#5046e6]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem] font-Darker text-[#fff] max-w-[80%] mx-auto text-xl md:text-3xl md:max-w-[60%] text-center font-semibold">
                    E-Cell DTU presents its annual flagship event E-SUMMIT'24 One of the biggest Entrepreneurship summits in India, E-Summit will bring to you a series of enthralling events. from panel discussions with distinguished dignitaries.to exciting competitions like B-plan.
                    Case study, hackathon, along with a spectacular band night and comedy night, the level of grandeur will be unparalleled
                </h2>
            </BoxReveal>
        </div>
    );
}
