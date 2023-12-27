import React from 'react'
import Image from "next/image"

export default function page() {
    return (
        <>
            <div className="w-full h-auto py-4 fixed top-0 shadow-lg font-CyberSport shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-10 z-[1000]">
                <div className="w-full h-full flex flex-row items-center justify-center md:justify-between m-auto px-[10px]">
                    <a href="/" className="h-auto w-full flex flex-row items-center">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={120}
                            height={80}
                            className="cursor-pointer hover:animate-slowspin mx-auto"
                        />
                    </a>
                </div>
            </div>
            <h1 className='text-center mt-36 text-4xl md:text-8xl xl:text-9xl mx-full text-white w-auto py-4 shadow-lg shadow-violet-600' id='con'>ECELL CONCLAVE</h1>
            <p className='text-white text-lg md:text-2xl md:mx-24 xl:mx-16 mx-6 my-2 font-semibold mt-12'>
                ECell DTU extends a warm and exclusive invitation, inviting you to immerse yourself in the world of entrepreneurship ON <span className='text-violet-600'>28TH OF JANUARY 2024.</span>
            </p>
            <p className='text-slate-100 md:text-xl md:mx-24 xl:mx-16 mx-6 font-medium mt-12'>
                Join us for an exploration of innovation, collaboration, and empowerment, where aspiring entrepreneurs from 30+ E Cell’s converge to share ideas, gain insights, and chart the course for future success. Your presence at E-Cell Conclave is not just an invitation; it’s an opportunity to be part of a thriving community that celebrates the spirit of innovation and fosters the entrepreneurial mindset. We look forward to hosting you at this enriching event, where possibilities unfold and connections flourish.
            </p>
            <div className="container p-4 text-white mx-4 pr-12 xl:pr-0 md:mx-20 xl:mx-12">
                <section className="mb-8">
                    <h1 className="text-3xl font-bold mb-4 mt-16 text-violet-600">INTRODUCTION</h1>
                    <p className='text-slate-100 text-lg xl:w-4/5'>Welcome esteemed institutions to the ECell Conclave Participation Documentation, an indispensable guide for those aspiring to participate in the pinnacle of entrepreneurial collaboration – ECell Conclave. This distinguished segment is an integral part of ESUMMIT&rsquo;24 hosted by Delhi Technological University&rsquo;s Entrepreneurship Cell.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">EXECUTIVE SUMMARY</h2>
                    <p className='text-slate-100 text-lg xl:w-4/5'>Welcome esteemed institutions to the ECell Conclave Participation Documentation, an indispensable guide for those aspiring to participate in the pinnacle of entrepreneurial collaboration – ECell Conclave. This distinguished segment is an integral part of ESUMMIT&rsquo;24 hosted by Delhi Technological University&rsquo;s Entrepreneurship Cell.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">MISSION STATEMENT</h2>
                    <p className='text-slate-100 text-lg xl:w-4/5'>This documentation serves the pivotal purpose of elucidating meticulous details surrounding participation in ECell Conclave, beckoning Entrepreneurship Cells from institutions across India to converge and showcase their prowess on a national stage.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">AGENDA OVERVIEW</h2>
                    <p className='text-slate-100 text-lg xl:w-4/5'>To orchestrate a seamless experience, participants are advised to adhere to the meticulously crafted schedule. Key timings for pivotal activities, including kiosk presentations and leader chit-chat sessions, are integral components of this well-structured event.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">III. PARTICIPATION GUIDELINES</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">A. ELIGIBILITY CRITERIA</h3>
                        <p className='text-slate-100 text-lg xl:w-4/5'>Participation in ECell Conclave is reserved for Entrepreneurship Cells that operate as student-run organizations and are registered in a recognized college of INDIA, underscoring the commitment to cultivating entrepreneurial acumen within the student community.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">B. REGISTRATION PROTOCOL</h3>
                        <p className='text-slate-100 text-lg xl:w-4/5'>Navigate the exclusive realm of ECell Conclave by registering your team via the provided form link. This invite-only event has limited seats available, emphasizing the exclusivity of participation. Failure to attend after registration will result in an unattended kiosk, prompting acknowledgment on ECELL D.T.U.&rsquo;s social media handles to uphold event prestige.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">C. KIOSK ALLOCATION PROCEDURE</h3>
                        <p className='text-slate-100 text-lg xl:w-4/5'>Registered teams are entitled to an 8×8 foot stall to showcase their entrepreneurial endeavors. Access to these stalls, facilitated by provided ID cards, will be granted on the 28th of January between 9-10 AM, ensuring a streamlined setup process for an impactful showcase.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">D. LEADER PARTICIPATION MANDATE</h3>
                        <p className='text-slate-100 text-lg xl:w-4/5'>The esteemed presence of the leader of each participating Entrepreneurship Cell is not just encouraged but mandatory. Leaders are pivotal in amplifying the impact of the event through their insights, networking, and active engagement.</p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">IV. SHOWCASE REQUIREMENTS</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">A. ACHIEVEMENTS PRESENTATION</h3>
                        <p className='text-slate-100 text-lg xl:w-4/5'>Elevate your Entrepreneurship Cell&rsquo;s profile by meticulously preparing and presenting achievements during the event, highlighting innovative strides, impactful projects, and noteworthy milestones.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">B. STRATEGIC STARTUP AFFILIATION</h3>
                        <p className='text-slate-100 text-lg xl:w-4/5'>Forge a strategic alliance with a single startup affiliated with your Entrepreneurship Cell, standing as a testament to collaborative spirit and entrepreneurial prowess.</p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">V. AUDIENCE INTERACTION AND BENEFITS</h2>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">A. ENGAGING THE AUDIENCE</h3>
                        <p className='text-slate-100 text-lg xl:w-4/5'>Seize the opportune moment to captivate a vast and discerning audience at ESUMMIT&rsquo;24, conducting meticulous product testing, gathering insightful user reviews, and facilitating strategic sales.</p>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">B. CAPITALIZING ON INVESTOR AND INDUSTRY PRESENCE</h3>
                        <p className='text-slate-100 text-lg xl:w-4/5'>Elevate your startup&rsquo;s trajectory by strategically leveraging the presence of distinguished venture capital firms, angel investors, event judges, and esteemed startup founders.</p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600 mt-16">VI. CONCLUSION AND NEXT STEPS</h2>
                    <p className='text-slate-100 text-lg xl:w-4/5'>In conclusion, this documentation has served as a comprehensive guide to navigating the intricacies of participating in ECell Conclave. The convergence of entrepreneurial minds at this event promises a unique platform to showcase achievements, engage with a discerning audience, and garner attention from industry leaders and investors.</p>
                    <p className='text-slate-100 text-lg xl:w-4/5 mt-2'>As you embark on this entrepreneurial journey, ensure your Entrepreneurship Cell is well-prepared for the event. Take note of key deadlines, adhere to outlined guidelines, and strategize for an impactful showcase.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-violet-600">VII. CONTACTS AND SUPPORT</h2>
                    <p>For any inquiries, assistance, or clarification, please reach out to our dedicated support team, which is committed to ensuring a seamless and enriching experience for every participating Entrepreneurship Cell.</p>

                    <div className="mt-4">
                        <h3 className="text-xl font-bold mb-2 underline underline-offset-4">Contact:</h3>
                        <div className="flex flex-col md:flex-row xl:w-4/5">
                            <div className="md:w-1/2">
                                <p className="mb-2 text-xl">
                                    Sunny<br />
                                    ..........................................<br />
                                    <a href="mailto:sunny.ecelldtu@gmail.com" className="text-blue-500">sunny.ecelldtu@gmail.com</a>
                                </p>
                            </div>
                            <div className="md:w-1/2 mt-4 md:mt-0">
                                <p className="mb-2 text-xl">
                                    Himanshi<br />
                                    .................................<br />
                                    <a href="mailto:kapoorhimanshi097@gmail.com" className="text-blue-500">kapoorhimanshi097@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 xl:w-4/5">OUR TEAM LOOKS FORWARD TO FACILITATING YOUR ENTREPRENEURSHIP CELL&apos;`S IMPACTFUL PRESENCE AT THIS PRESTIGIOUS EVENT AND MAKING A STRONG IMPACT FOR THE GROWTH OF THE ECOSYSTEM AS A WHOLE.</p>
                </section>
                <div className="p-6 text-center mt-12">
                    <h2 className="text-xl mb-4 text-violet-600">DATE:</h2>
                    <p className="text-3xl font-bold mb-12">28TH OF JANUARY 2024</p>
                    <h2 className="text-xl mb-4 text-violet-600">REGISTRATION DESK TIMING:</h2>
                    <p className="text-3xl font-bold mb-12">9 AM TO 10 AM</p>
                    <h2 className="text-xl mb-4 text-violet-600">EXHIBITION TIME:</h2>
                    <p className="text-3xl font-bold mb-12">10 A.M. TO 4 P.M.</p>
                    <h2 className="text-xl mb-4 text-violet-600">VENUE:</h2>
                    <p className="text-2xl md:text-3xl font-bold">DELHI TECHNOLOGICAL UNIVERSITY CAMPUS, NEAR ROHINI</p>
                </div>
                <div className="container mx-auto py-8 px-4">
                    <h1 className="text-4xl font-bold mb-8 text-violet-600 mt-24">FAQs</h1>

                    {/* Question 1 */}
                    <div className="mt-12 mb-4">
                        <p className="font-bold mb-2">Q: Is there any participation cost?</p>
                        <p>No, there is no participation cost.</p>
                    </div>

                    {/* Question 2 */}
                    <div className="mt-12 mb-4">
                        <p className="font-bold mb-2">
                            Q: Will E Cell DTU provide the travel and accommodation costs for participants?
                        </p>
                        <p>No, E Cell DTU will not provide travel and accommodation costs for any participant.</p>
                    </div>

                    {/* Question 3 */}
                    <div className="mt-12 mb-4">
                        <p className="font-bold mb-2">
                            Q: Will the stall cost be handled by E Cell DTU?
                        </p>
                        <p>
                            Yes, the basic stall set-up cost will be taken care of by E Cell DTU, however participating E Cells are free to bring along with them any type of posters/banners/standees to advertise their startup (restricted to their stall itself).
                        </p>
                    </div>

                    {/* Question 4 */}
                    <div className="mt-12 mb-4">
                        <p className="font-bold mb-2">
                            Q: How many startups can an E Cell bring in for showcasing?
                        </p>
                        <p>
                            We respect every idea but due to a constraint, we expect every e-cell to bring along only one startup. (For shortlisting the same, the participating E-Cell is expected to host a shortlisting round on their campus beforehand)
                        </p>
                    </div>

                    {/* Question 5 */}
                    <div className="mt-12 mb-4">
                        <p className="font-bold mb-2">
                            Q: What stage startup will be allowed to be showcased?
                        </p>
                        <p>
                            A startup can be in any state, be it ideation, seed, Series A, Series B, etc.
                        </p>
                    </div>

                    {/* Question 6 */}
                    <div className="mt-12 mb-4">
                        <p className="font-bold mb-2">
                            Q: How many people will be allowed in the event?
                        </p>
                        <p>
                            The event is open to all; however, E-Cell DTU will be able to provide hospitality to only a maximum of 3 people per E-Cell (2 associated with the startup and 1 E-Cell contingent leader accompanying them).
                        </p>
                    </div>

                    {/* Question 7 */}
                    <div className="mt-12 mb-4">
                        <p className="font-bold mb-2">
                            Q: What will be the role of the E Cell contingent leader coming in?
                        </p>
                        <p>
                            The E-cell contingent leader will be expected to indulge in networking sessions with other leaders coming in and bring forward the issues faced by them and available opportunities to accelerate the growth of the ecosystem as a whole. The leader can be a faculty advisor of the E Cell or a Core Leader at E Cell.
                        </p>
                    </div>

                    {/* Question 8 */}
                    <div className="mt-12 mb-4">
                        <p className="font-bold mb-2">
                            Q: Can the sale of a product/service take place?
                        </p>
                        <p>
                            No, any sort of commercial usage of the stall cannot take place (only showcasing will be allowed). If found, the cell will be disqualified and blacklisted for the future. If interested in commercial usage, please contact E Cell DTU officials to help you with the same.
                        </p>
                    </div>

                    {/* Note */}
                    <div>
                        <p className="font-bold text-violet-600 mt-12">NOTE:</p>
                        <p>
                            The decision of E Cell DTU management will stand correct in all cases. Discrimination/Unfair Practices/Unethical Behaviour of any kind will not be tolerated, and serious actions will be taken by the concerned authorities.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
