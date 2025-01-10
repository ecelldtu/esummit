"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";
import Image from "next/image";

const items = [
  { title: "Register now", href: "https://unstop.com/o/nKvl03J?lb=xPyC8uqj", imgSrc: "/images/bplan.png" },
  { title: "Register now", href: "https://unstop.com/p/shark-tank-e-summit25-dtu-new-delhi-1351932", imgSrc: "/images/shark.png" },
  { title: "Coming soon", href: "/", imgSrc: "" },
  // { title: "Coming soon", href: "/", imgSrc: "" },
  // { title: "Coming soon", href: "/", imgSrc: "" },
  // { title: "Coming soon", href: "/", imgSrc: "" },
];

export default function Page() {
  return (
    <>
      <h2 className="max-w-7xl text-white pl-4 mt-24 mb-[1080px] sm:mb-96 mx-auto text-4xl md:text-7xl font-bold font-Nova">
        Competitions
      </h2>
      <div className="h-[40rem] w-full flex items-center md:-my-48 justify-center">
        <div className="grid gap-6 p-4 mx-auto max-w-7xl font-DarkerBold sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {items.map((item, index) => (
            <PinContainer key={index} title={item.title} href={item.href}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-blue-500/10">
                  {item.imgSrc ? (
                    <Image
                      width={400}
                      height={400}
                      src={item.imgSrc}
                      alt={item.title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  ) : (
                    <div className="flex font-Darker items-center justify-center w-full h-full text-white text-xl font-bold">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </>
  );
}
