import React, {useEffect, useState} from 'react';
import { motion  } from 'framer-motion';
import {MdLabelImportantOutline} from "react-icons/md";
import {IoIosCheckmarkCircle, IoMdCheckboxOutline} from "react-icons/io";
import {TbCopy} from "react-icons/tb";

import Image from "next/image";
import {AiOutlineInfoCircle} from "react-icons/ai";

interface Props {
}

const SectionPricing: React.FC<Props> = ({  }) => {

    return (
        <div id="free" className="dark:bg-custom-dark">
            <section className="w-4/5 mx-auto space-y-4 pt-12 ">
                {/* Title section */}
                <div>
                    <div className="text-center space-y-4">
                        {/*<span className="text-primary dark:bg-white text-xs   rounded-full py-1 px-4 border  border-primary/15">*/}
                        {/*    Packages*/}
                        {/*</span>*/}
                        {/*<h2 className="text-center text-slateGray dark:text-white text-2xl font-semibold">*/}
                        <h2 className="text-center text-primary text-3xl font-semibold">
                            Plans
                        </h2>
                    </div>
                </div>

                {/* Pricing cards */}
                {/*<div className="justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-3 gap-y-8 gap-5">*/}
                {/*<div className="justify-center flex pt-3 gap-y-8 gap-5">*/}
                <div className="justify-center flex flex-wrap pt-3 gap-y-8 gap-5">
                    {/* Free plan */}
                    <motion.div whileHover={{scaleY: 1.05}} transition={{duration: 0.3, ease: "linear"}}
                        className="border flex-grow basis-1/2 md:basis-1 border-custom-gray/30 py-8 px-6 rounded-xl cursor-pointer shadow-sm text-slateGray dark:text-white hover:border-primary transition-all duration-300 ease-in-out group"
                    >
                        <div>
                            <h4 className="capitalize font-medium text-xl">
                                Free
                            </h4>
                        </div>
                        <div className="my-1.5">
                            <span className="text-5xl font-semibold">$0</span>/month
                        </div>
                        <div>
                            <p className="py-2">
                                Money Saver, with all Essentials.
                            </p>
                            <ul className="py-4 font-medium text-sm space-y-2">
                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    10 Daily Summaries
                                </li>
                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    3 Weekly Transcriptions
                                </li>
                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    20min Transcriptions
                                </li>

                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    20 Weekly Images
                                </li>

                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    5 Daily Chats
                                </li>

                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    15 Messages per Chat
                                </li>

                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    100 Stored Items
                                </li>

                                <li className="flex items-center">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    Access to Fastest Models
                                    <AiOutlineInfoCircle className="ml-1.5 rotate-180 text-xl"/>
                                </li>
                            </ul>
                            <a href="/downloads">

                            <div className="py-3">
                                <button
                                    className="border dark:bg-custom-gray/5 dark:border-transparent group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:text-white font-semibold rounded-md py-2 px-4 w-full mt-4">
                                    Get Started
                                </button>
                            </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div whileHover={{scaleY: 1.05}} transition={{duration: 0.3, ease: "linear"}}
                        className="border flex-grow md:basis-1 basis-1/2 border-custom-gray/30 py-8 px-6 rounded-xl cursor-pointer shadow-sm text-slateGray dark:text-white  hover:border-primary transition-all duration-300 ease-in-out group"
                    >
                        <div>
                            <h4 className="capitalize font-medium text-xl">
                                Explorer (coming)
                            </h4>
                        </div>
                        <div className="my-1.5">
                            <span className="text-5xl font-semibold">TBD</span>
                        </div>
                        <div>
                            <p className="py-2">
                                Extended usage limits, Smarter AI.
                            </p>
                            <ul className="py-4 font-medium text-sm space-y-2">
                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    5x Daily Summaries
                                </li>
                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    10 Weekly Transcriptions
                                </li>
                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    1h Transcriptions
                                </li>

                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    20 Daily Images
                                </li>

                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    3x Daily Chats
                                </li>

                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    5x Messages per Chat
                                </li>

                                <li className="flex items-center ">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    10x Latest Stored Items
                                </li>

                                <li className="flex items-center">
                                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>
                                    Access to Balanced Models
                                    <AiOutlineInfoCircle className="ml-1.5 rotate-180 text-xl"/>
                                </li>
                            </ul>
                            <a href="mailto:support@pnt.is?subject=Plan%20Suggestion">
                                <div className="py-3">
                                    <button
                                        className="border dark:bg-custom-gray/5 dark:border-transparent group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:text-white font-semibold rounded-md py-2 px-4 w-full mt-4">
                                        Make a Suggestion
                                    </button>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/*    /!* Influencer plan *!/*/}
                    {/*    <motion.div*/}
                    {/*        whileHover={{scaleY: 1.05}}*/}
                    {/*        transition={{*/}
                    {/*            duration: 0.3,*/}
                    {/*            ease: "linear",*/}
                    {/*        }}*/}
                    {/*        className="border border-custom-gray/30 cursor-pointer py-8 px-6 rounded-xl shadow-sm text-slateGray dark:text-white hover:border-primary transition-all duration-300 ease-in-out group"*/}
                    {/*    >*/}
                    {/*        <div>*/}
                    {/*            <h4 className="capitalize font-medium text-xl">*/}
                    {/*                Influencer plan*/}
                    {/*            </h4>*/}
                    {/*        </div>*/}
                    {/*        <div className="my-1.5">*/}
                    {/*            <span className="text-5xl font-semibold">$1</span>/month*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <p className="py-2">*/}
                    {/*                Premium features to boost your Innovation*/}
                    {/*            </p>*/}
                    {/*            <ul className="py-4 font-medium text-sm space-y-2">*/}
                    {/*                <li className="flex items-center ">*/}
                    {/*                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>*/}
                    {/*                    50 Daily Credits*/}
                    {/*                    <AiOutlineInfoCircle className="ml-1.5 rotate-180 text-xl"/>*/}
                    {/*                </li>*/}
                    {/*                <li className="flex items-center">*/}
                    {/*                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>*/}
                    {/*                    Access to AI models*/}
                    {/*                    <AiOutlineInfoCircle className="ml-1.5 rotate-180 text-xl"/>*/}
                    {/*                </li>*/}
                    {/*                <li className="flex items-center">*/}
                    {/*                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>*/}
                    {/*                    Writing Assistant*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*            <div className="py-3 mt-6">*/}
                    {/*                <button*/}
                    {/*                    className="border dark:bg-custom-gray/5 dark:border-transparent bg-primary text-white group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:text-white font-semibold rounded-md py-2 px-4 w-full mt-4">*/}
                    {/*                    Get Started*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </motion.div>*/}

                    {/*    /!* Standard plan *!/*/}

                    {/*    <motion.div*/}
                    {/*        whileHover={{scaleY: 1.05}}*/}
                    {/*        transition={{*/}
                    {/*            duration: 0.3,*/}
                    {/*            ease: "linear",*/}
                    {/*        }}*/}
                    {/*        className="border border-custom-gray/30 py-8 px-6 rounded-xl shadow-sm cursor-pointer text-slateGray dark:text-white hover:border-primary transition-all duration-300 ease-in-out group"*/}
                    {/*    >*/}
                    {/*        <div>*/}
                    {/*            <h4 className="capitalize font-medium text-xl">*/}
                    {/*                Standard plan*/}
                    {/*            </h4>*/}
                    {/*        </div>*/}
                    {/*        <div className="my-1.5">*/}
                    {/*            <span className="text-5xl font-semibold">$8</span>/month*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <p className="py-2">*/}
                    {/*                All Premium features to boost your Innovation*/}
                    {/*            </p>*/}
                    {/*            <ul className="py-4 font-medium text-sm space-y-2">*/}
                    {/*                <li className="flex items-center ">*/}
                    {/*                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>*/}
                    {/*                    100 Daily Credits*/}
                    {/*                    <AiOutlineInfoCircle className="ml-1.5 rotate-180 text-xl"/>*/}
                    {/*                </li>*/}
                    {/*                <li className="flex items-center">*/}
                    {/*                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>*/}
                    {/*                    Access to AI models*/}
                    {/*                    <AiOutlineInfoCircle className="ml-1.5 rotate-180 text-xl"/>*/}
                    {/*                </li>*/}
                    {/*                <li className="flex items-center">*/}
                    {/*                    <IoIosCheckmarkCircle className="mr-1.5 text-xl dark:text-custom-gray"/>*/}
                    {/*                    Writing Assistant*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*            <div className="py-3">*/}
                    {/*                <button*/}
                    {/*                    className="border dark:bg-custom-gray/5 dark:border-transparent group-hover:bg-primary transition-all duration-300 ease-in-out group-hover:text-white font-semibold rounded-md py-2 px-4 w-full mt-4">*/}
                    {/*                    Get Started*/}
                    {/*                </button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </motion.div>*/}
                </div>

                <div
                    className="w-[90%] sm:w-4/5 transform translate-y-1/3 mx-auto h-64 md:h-50 py-8 bg-primary rounded-lg flex flex-col items-center justify-center">
                    <h4 className="text-xl lg:text-2xl text-white my-2 sm:my-3 font-semibold">
                        Ready to Get Started?
                    </h4>
                    <p className="w-4/5 sm:w-3/5 text-sm md:text-base my-3 text-center mx-auto text-white">
                        Get the biggest productivity boost by using both Browser Companion and Desktop app.
                    </p>
                    <a href="/downloads"
                       className="bg-black rounded-full text-sm md:text-base py-3 mt-2 px-8 text-white">
                        Download Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default SectionPricing;