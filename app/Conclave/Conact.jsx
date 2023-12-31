"use client"
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import './style.css';

const submitForm = async (e, formRef, controls) => {
    e.preventDefault();

    const formEle = e.target;
    const formDatab = new FormData(formEle);

    try {
        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbyDALjYxXc2WeAZT_RpYCAsl7clVzgjpUo-cFr3lJnzu95KK4U_vvy7GNkScoK0rrxJ/exec',
            {
                method: 'POST',
                body: formDatab,
            }
        );

        console.log('Response:', response);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error: ${errorText}`);
            return;
        }
        alert('Your Message has been Sent!');
        controls.start('hidden'); // Hide the form after successful submission
        formRef.current.reset();
    } catch (error) {
        console.error('Error:', error);
    }
};

const App = () => {
    const controls = useAnimation();
    const [ref1, inView1] = useInView({ threshold: 0.01 });

    useEffect(() => {
        if (inView1) {
            controls.start('visible');
        }
    }, [controls, inView1]);

    const formRef = useRef(null);

    return (
        <div
            className="md:mt-20 rounded-xl z-[500] mb-24"
        >
            <h1 className="text-xl md:text-4xl leading-10 md:mx-24 text-center mx-4 font-bold my-16 md:my-24 text-violet-600">
                Want your E Cell at the Inter E Cell Conclave?
                Contact the team now to reserve your spot
            </h1>
            <form
                ref={formRef}
                onSubmit={(e) => submitForm(e, formRef, controls)}
                className="form mx-auto max-w-screen-lg z-[500]"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-12">
                    <div className="mb-4 z-[500] col-span-2 md:col-span-1">
                        <input
                            placeholder="Your Name"
                            name="Name"
                            type="text"
                            className="input-field bg-slate-400/10 text-white"
                        />
                    </div>
                    <div className="mb-4 z-[500] col-span-2 md:col-span-1">
                        <input
                            placeholder="Your Official Email"
                            name="Mail"
                            type="text"
                            className="input-field bg-slate-400/10 text-white"
                        />
                    </div>
                    <div className="mb-4 z-[500] col-span-2 md:col-span-1">
                        <input
                            placeholder="Your College"
                            name="College"
                            type="text"
                            className="input-field bg-slate-400/10 text-white"
                        />
                    </div>
                    <div className="mb-4 z-[500] col-span-2 md:col-span-1">
                        <input
                            placeholder="Your Phone"
                            name="Phone"
                            type="number"
                            className="input-field bg-slate-400/10 text-white"
                        />
                    </div>
                    <div className="mb-4 col-span-2 z-[500]">
                        <input
                            placeholder="Your Message"
                            name="Message"
                            type="text"
                            className="input-field bg-slate-400/10 text-white"
                        />
                    </div>
                    <div className="col-span-2 z-[500]">
                        <button type="submit" className="w-full btn-submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default App;
