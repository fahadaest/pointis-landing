import React, {useEffect, useState} from 'react';
import { motion  } from 'framer-motion';
import {MdLabelImportantOutline} from "react-icons/md";
import {IoMdCheckboxOutline} from "react-icons/io";
import {TbCopy} from "react-icons/tb";

import Image from "next/image";
import FeatureStyle1 from "@/app/_components/FeatureStyle1";

interface Props {
}

const SectionWhyTextCards: React.FC<Props> = ({ }) => {

    return (
        <div className="dark:bg-custom-darker">
            <section className="mx-auto w-4/5 py-16 space-y-14">
                <div>
                    <div>
                        <h2 className="text-center text-3xl lg:text-3xl text-slateGray dark:text-white font-semibold">
                            Why <span className="text-primary">Pointis ?</span>
                        </h2>
                    </div>
                    {/*<div className="mt-4">*/}
                    {/*    <p className="px-8 text-sm lg:text-base text-center max-w-screen-xs mx-auto text-lightGray dark:text-white">*/}
                    {/*        Unlike other AI tools that confine you to specific platforms, Pointis seamlessly*/}
                    {/*        integrates into your existing workflow, empowering you to everything you need.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </div>

                {/*<span*/}
                {/*    className="font-semibold text-xl text-slateGray dark:text-white group-hover:text-white transition-colors duration-300 ease-in-out">*/}
                {/*  Features*/}
                {/*</span>*/}

                <div className="dark:bg-custom-darker grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/*<div className="hover:!bg-primary bg-gray-800 p-6 rounded-lg">*/}

                    {[
                        {
                            icon: <svg className="w-8 h-8 text-green-500 mb-4" fill="none"
                                       stroke="currentColor"
                                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>,
                            header: "Independent Intelligence",
                            text: "Unlike other AI tools, Pointis works on any website and understands the context of your work. No need to switch between tools."
                        },
                        // {
                        //     icon: <svg className="w-8 h-8 text-green-500 mb-4" fill="none"
                        //                stroke="currentColor"
                        //                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        //               d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        //     </svg>,
                        //     header: "Easy to Use Anywhere",
                        //     text: "Unlike other AI tools, Pointis works on any website and understands the context of your work. No need to switch between tools."
                        // },
                        {
                            icon: <svg className="w-8 h-8 text-orange-500 mb-4" fill="none"
                                       stroke="currentColor"
                                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>,
                            header: "Reads Any Webpage",
                            text: "Pointis can read websites, articles, URLs, and email conversations and help you summarize, rewrite, translate, reply, or create new content."
                        },
                        {
                            icon: <svg className="w-8 h-8 text-teal-500 mb-4" fill="none"
                                       stroke="currentColor"
                                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>,
                            header: "Expert Prompt Library",
                            text: "Our expert prompt library helps you get started with writing, brainstorming, and researching."
                        },
                        {
                            icon: <svg className="w-8 h-8 text-yellow-500 mb-4" fill="none"
                                       stroke="currentColor"
                                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>,
                            header: "Saved Prompts",
                            text: "Save and organize your most powerful prompts for easy access and reuse."
                        },
                        {
                            icon: <svg className="w-8 h-8 text-blue-500 mb-4" fill="none"
                                       stroke="currentColor"
                                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>,
                            header: "Reply to Emails",
                            text: "Draft or improve your emails. Select text, tune tone if needed and generate a reply."
                        },
                        {
                            icon: <svg className="w-8 h-8 text-red-500 mb-4" fill="none"
                                       stroke="currentColor" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>,
                            header: "YouTube Summaries",
                            text: "Summarize long YouTube videos in a few seconds. Get the gist, not stuck on details."
                        }
                    ].map((feature, index) => (
                        <FeatureStyle1
                            key={index}
                            icon={feature.icon}
                            header={feature.header}
                            text={feature.text}
                        />
                    ))
                    }
                </div>
            </section>
        </div>
    );
};

export default SectionWhyTextCards;