"use client"
import React, { useRef, useEffect } from 'react';
import emailjs from "emailjs-com";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
const ForgotPasswordForm = () => {
    const controls = useAnimation();
    const [ref1, inView1] = useInView({ threshold: 0.01 });

    useEffect(() => {
        if (inView1) {
            controls.start("visible");
        }
    }, [controls, inView1]);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jk8jh3o', 'template_5l6fezz', form.current, 'v0txexV6zNsPVbDmP')
            .then((result) => {
                alert("Your Message has been Sent!");
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <motion.div
                ref={ref1}
                animate={controls}
                initial="hidden"
                transition={{ duration: 1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 60 },
                }}
                className="md:mt-20 rounded-xl z-[500] mb-24">
                <h1 className='text-center text-4xl md:text-8xl xl:text-9xl w-full text-white py-4 font-CyberGraph'>Any Doubts ?</h1>
                <form ref={form} onSubmit={sendEmail} className="w-screen mx-auto -mt-2 relative">
                    <div className="flex flex-row w-full items-center pt-10 mx-auto justify-center bg-none rounded-xl md:rounded-l-lg md:rounded-none relative z-10">
                        <div className="w-screen relative flex flex-col md:flex-row justify-around">
                            <div className="relative my-8 mx-4">
                                <p className="pt-0 text-xl pr-2 pb-4 pl-2 -mt-3 mr-0 mb-0 ml-2 text-violet-500 font-semibold font-CyberGraph absolute -top-4">Name</p>
                                <input name="from_name" placeholder="" type="text" className="border focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white/10 border-gray-300 rounded-md" />
                            </div>
                            <div className="relative my-8 mx-4">
                                <p className="pt-0 text-xl pr-2 pb-4 pl-2 -mt-3 mr-0 mb-0 ml-2 text-violet-500 font-semibold font-CyberGraph absolute -top-4">Email</p>
                                <input name="user_email" placeholder="" type="text" className="border focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white/10 border-gray-300 rounded-md" />
                            </div>
                            <div className="relative my-8 mx-4">
                                <p className="pt-0 text-xl pr-2 pb-4 pl-2 -mt-3 mr-0 mb-0 ml-2 text-violet-500 font-semibold font-CyberGraph absolute -top-4">Query</p>
                                <input name="message" placeholder="" type="word" className="border focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white/10 border-gray-300 rounded-md" />
                            </div>
                            <div className="relative my-8 mx-4">
                                <button type="submit" value="Send" onClick={sendEmail} className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-violet-600 font-Queensides rounded-lg transition duration-200 hover:bg-violet-900 md:mt-2 ease">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </motion.div>
        </>
    );
};

export default ForgotPasswordForm;