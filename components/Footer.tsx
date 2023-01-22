import React from "react";
import { Element } from "react-scroll";
import Image from "next/image";
export default function Footer() {
  return (
    <Element name = "footer">
      <div className="font-poppins">
        <div className="flex justify-center mb-0"></div>

        <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink1 to-pink2">
          <div className="w-full px-24 text-white flex flex-col">
            <div className="w-full text-4xl font-bold">
              <h1 className="w-full pt-12">
                How can we help you. get in touch
              </h1>
            </div>

            <div className="flex mt-4 flex-col md:flex-row md:justify-between">
              <p className="w-full md:w-2/3 text-gray-400">
                An extravagant event filled with exciting and breathtaking
                events and competitions like Panel Discussions, Business Plan,
                Comedy Evening, Gaming nights and so much more.
              </p>
            </div>
            <div className="w-44 pt-3 md:pt-0 ml-right my-5   ">
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
              <div className="flex mb-12 flex-row justify-between">
                <div className="">
                  <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                  <div className="flex flex-col">
                    <p className="text-poppins ">
                      Delhi Technological University
                    </p>
                    <p className="font-poppins">
                      Bawana Rd, Shahbad Daulatpur Village, Rohini, New Delhi,
                      Delhi 110042
                    </p>
                  </div>
                  <br />
                  <br />
                  +91 95994 24420 <br />
                  (Aditya Khandelwal, President E-Cell)
                  <div className="text-white leading-normal uppercase  focus:outline-none h-3 m-4 mx-auto ">
                    Our Social Networks:
                  </div>
                  <div className="flex flex-row my-2">
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
              <p className="w-full text-center my-4 text-black bg-gradient-gray-100">
                Copyright © 2023 E-cell,DTU
              </p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
