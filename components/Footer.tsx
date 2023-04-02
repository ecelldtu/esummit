import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";
export default function Footer() {
  return (
    <Element name = "footer max-h-[200px]">
      <div className="">
        <div className="flex justify-center mb-0"></div>
  
        <h1 className=" text-xl text-center  w-screen lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-3 pl-10">
         MAP
        </h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.138159746277!2d77.11426731506498!3d28.745291685719316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0125d6f9588d%3A0x153fdaa12a9ef84a!2sDelhi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1647234165134!5m2!1sen!2sin"width="100%" height="300" loading="lazy" style={{ opacity: 0.8 }}> </iframe>
        <div className="w-screen max-h-fit flex items-center justify-center bg-gradient-to-tr from-pink1 to-pink2">
          <div className="w-full px-24 text-white flex flex-col">
            <div className="w-full text-2xl font-bold">
              <h1 className="w-full pt-3">
                How can we help you. get in touch
              </h1>
            </div>

            <div className="flex mt-4 flex-col md:flex-row md:justify-between">

            </div>
            <div className="w-44 pt-3 md:pt-0 ml-right my-3   ">
              <a
                href="https://ecelldtu.in/"
                className="flex items-center mb-4 sm:mb-0  hover:bg-pink2 rounded-lg hover:bg-opacity-50"
              >
                <Image
                  height={20}
                  width={150}
                  src="/ecelltext.png"
                  className="h-20 w-100 mr-3 "
                  alt="=Logo"
                />
              </a>
            </div>

            <div className="flex flex-col">
              <div className="flex mb-6 flex-row justify-between">
                <div className="">
                  <h2 className="text-xl font-bold mb-5">Contact us</h2>
                  <div className="flex flex-col">
                    <p className=" ">
                      Delhi Technological University
                    </p>
                    <p className="">
                      Bawana Rd, Shahbad Daulatpur Village, Rohini, New Delhi,
                      Delhi 110042
                    </p>
                  </div>
                  <br />
             
                  +91 95994 24420 <br />
                  (Aditya Khandelwal, President E-Cell)
                  <div className="text-white leading-normal uppercase sm:text-sm focus:outline-none m-4 mx-auto ">
                    Our Social Networks:
                  </div>
                  <div className="flex flex-row my-1">
                  <a
                    href="https://www.instagram.com/ecelldtu/"
                    type="button"
                    className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-pink2 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      className="w-3 h-full mx-auto"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/ECellDTU/"
                    type="button"
                    className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-pink2 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="facebook-f"
                      className="w-2 h-full mx-auto"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ecelldtu/"
                    type="button"
                    className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-pink2 hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="linkedin-in"
                      className="w-3 h-full mx-auto"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      ></path>
                    </svg>
                  </a>
                  </div>
                  
                </div>

                <div className="flex flex-row space-x-8 items-center justify-between"></div>
              </div>

              <hr className="border-gray-600" />
              <p className="w-full text-center my-2 text-black bg-gradient-gray-100">
                Copyright © 2023 E-cell,DTU
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
