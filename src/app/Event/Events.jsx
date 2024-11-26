"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component

export default function Home() {
    return (
        <div className="pt-24 px-6">
            <h2 className="max-w-7xl text-white pl-4 mx-auto text-4xl mt-24 mb-8 md:my-24 md:text-7xl font-bold font-Nova">
                Events
            </h2>

            {/* Responsive Grid */}
            <section className="bg-black font-DarkerBold">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-black h-auto md:h-full flex flex-col">
                            <div className="group relative flex flex-col overflow-hidden rounded-xl px-4 pb-4 pt-40 flex-grow">
                                <Image
                                    src="/ev/lead.avif"
                                    alt="Event Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-105 opacity-50 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                    Leadership and Disruption Series
                                </h3>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-black">
                            <div className="group relative flex flex-col overflow-hidden rounded-xl px-4 pb-4 pt-40 mb-4">
                                <Image
                                    src="/ev/key.avif"
                                    alt="Event Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-105 opacity-50 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                    Keynote Session
                                </h3>
                            </div>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <div className="group relative flex flex-col overflow-hidden rounded-xl px-4 pb-4 pt-40">
                                    <Image
                                        src="/ev/start.avif"
                                        alt="Event Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:scale-105 opacity-50 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                        Startup Social
                                    </h3>
                                </div>
                                <div className="group relative flex flex-col overflow-hidden rounded-xl px-4 pb-4 pt-40">
                                    <Image
                                        src="/ev/pod.avif"
                                        alt="Event Image"
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:scale-105 opacity-50 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                        Espresso with E-Cell
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-black h-auto md:h-full flex flex-col">
                            <div className="group relative flex flex-col overflow-hidden rounded-xl px-4 pb-4 pt-40 flex-grow">
                                <Image
                                    src="/ev/job.avif"
                                    alt="Event Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="group-hover:scale-105 opacity-50 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                                    SIJF - Startup, Internship, and Job Fair
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Responsive Three Equal Boxes with Absolute Text */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                        <div className="relative rounded-xl overflow-hidden h-48 w-full bg-black">
                            <Image
                                src="/ev/create.avif"
                                alt="Event Image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="absolute top-0 left-0 p-4 text-2xl font-medium text-white">
                                Creator's Summit
                            </h3>
                        </div>
                        <div className="relative rounded-xl overflow-hidden h-48 w-full bg-black">
                            <Image
                                src="/ev/comedy.avif"
                                alt="Event Image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="absolute top-0 left-0 p-4 text-2xl font-medium text-white">
                                Comedy Dose
                            </h3>
                        </div>
                        <div className="relative rounded-xl overflow-hidden h-48 w-full bg-black">
                            <Image
                                src="/ev/bolly.avif"
                                alt="Event Image"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl opacity-50"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            <h3 className="absolute top-0 left-0 p-4 text-2xl font-medium text-white">
                                Bollywood Blaze
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
