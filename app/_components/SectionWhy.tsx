import React, {useEffect, useState} from 'react';
import { motion  } from 'framer-motion';
import {MdLabelImportantOutline} from "react-icons/md";
import {IoMdCheckboxOutline} from "react-icons/io";
import {TbCopy} from "react-icons/tb";

import Image from "next/image";
import {
    AiOutlineBulb, AiOutlineCopy, AiOutlineDesktop,
    AiOutlineEdit,
    AiOutlineFileText,
    AiOutlinePicture,
    AiOutlineQuestionCircle,
    AiOutlineRead, AiOutlineRedo
} from "react-icons/ai";
import FeatureStyle1 from "@/app/_components/FeatureStyle1";

interface SectionWhyCard {
    selected: boolean;
    text: string;
    description: string;
    icon: React.ReactNode;
    image: string;
}

const CARDS = [
    {text: "Summarize", description: "Save 90% of your time by instantly summarizing web pages and videos.", icon: <AiOutlineFileText />, image: "/images/r5/features/summarize_yt.webp"},
    {text: "Ask a Page", description: "Get content specific answers in seconds. Ask any page.", icon: <AiOutlineQuestionCircle />, image: "/images/r5/features/ask_page.gif"},
    {text: "Explore Similar", description: "Explore simular notes from your Private Knowledge via a sidebar.", icon: <AiOutlineCopy />, image: "/images/r5/features/similar.png"},
    {text: "Take Notes", description: "Need a quick pad to write something done? You got it. All generated content is stored as notes.", icon: <AiOutlineFileText />, image: "/images/r5/features/note_edit.webp"},
    // {text: "Imagify", description: "Enrich you content or notes with catchy images.", icon: <AiOutlinePicture />, image: "/images/r5/features/imagify.webp"},
    {text: "Imagine", description: "Turn your imagination into stunning images.", icon: <AiOutlineBulb />, image: "/images/r5/features/imagine.png"},
    {text: "Create Content", description: "Write or improve any content 10X faster, from a paragraph to a full article", icon: <AiOutlineEdit />, image: "/images/r5/features/assist_web.webp"},
    {text: "Any AI", description: "Everything AI is better at something. Quick try different one to get best results.", icon: <AiOutlineRedo />, image: "/images/r5/features/redo_with.gif"},
    {text: "Desktop App", description: "Explore and Learn in the Browser, continue later on the Desktop.", icon: <AiOutlineDesktop />, image: "/images/r5/features/browser_desktop_history.png"}
] as SectionWhyCard[]

interface Props {
    theme?: string;
}

const SectionWhy: React.FC<Props> = ({ theme }) => {

    const [selectedCard, setSelectedCard] = useState<SectionWhyCard>(CARDS[0]);

    return (
        // <div id="features" className="dark:bg-custom-darker">
        <div id="features" className="bg-white dark:bg-custom-darker">
            <section className="sm:w-full md:w-4/5 mx-auto py-8 space-y-8">
                {/*<div>*/}
                {/*    <div>*/}
                {/*        <h2 className="text-center text-2xl lg:text-3xl text-slateGray dark:text-white font-semibold">*/}
                {/*            Why <span className="text-primary">Pointis ?</span>*/}
                {/*        </h2>*/}
                {/*    </div>*/}
                {/*    <div className="mt-4">*/}
                {/*        <p className="px-8 text-sm lg:text-base text-center max-w-screen-xs mx-auto text-lightGray dark:text-white">*/}
                {/*            Unlike other AI tools that confine you to specific platforms, Pointis seamlessly integrates into your existing workflow, empowering you to everything you need.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div>
                    <h2 className="text-center text-3xl lg:text-3xl text-slateGray dark:text-white font-semibold">
                        Features
                        {/*Features <span className="text-primary">Suite</span>*/}
                    </h2>
                </div>

                <div className="flex flex-col">
                {/*<div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-6">*/}
                {/*<div className="flex flex-wrap gap-0 items-center justify-center">*/}
                    <div className="basis-20">
                        <div className="flex flex-wrap gap-0 items-center justify-center">
                            {CARDS.map((card) => (
                                <div
                                    className="flex gap-3 py-2 px-2 rounded-lg cursor-pointer hover:bg-primary hover:shadow-lg items-center"
                                    // className="flex gap-3 py-1 px-2 rounded-lg cursor-pointer hover:bg-white dark:hover:bg-custom-dark hover:shadow-lg items-center"
                                    onClick={() => setSelectedCard(card)}
                                >
                                    <div
                                        className="flex-shrink-0 bg-gray-200 dark:bg-custom-gray rounded-full w-10 h-10 flex items-center justify-center">
                                        {card.icon}
                                        {/*<MdLabelImportantOutline className="text-xl text-primary"/>*/}
                                    </div>
                                    <div className="space-y-2 flex items-center">
                                        <div>
                                            <h2 className="text-slateGray dark:text-white">{card.text}</h2>
                                            {/*<p className="text-xs text-lightGray">*/}
                                            {/*    Included in Free Tier*/}
                                            {/*</p>*/}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-3">
                        {/*<p className="text-xs text-lightGray">*/}
                        {/*    Included in Free Tier*/}
                        {/*</p>*/}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5}}
                            className="w-full md:w-auto mt-4"
                        >
                            <div className="px-5 text-xl text-center text-slateGray dark:text-white">
                                {selectedCard.description}
                            </div>

                            {selectedCard?.image &&
                                <Image
                                    className="m-20 mt-5 mb-5 rounded-3xl w-[460px] md:w-[600px] lg:w-[780px] h-auto mx-auto"
                                    src={selectedCard.image}
                                    width={600}
                                    height={600}
                                    alt={selectedCard.text}
                                />
                            }
                        </motion.div>
                    </div>

                </div>

                {/*    <div className="col-span-1 lg:col-span-2">*/}
                {/*        <div*/}
                {/*            className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:mt-8 xl:mt-16 2xl:mt-20 gap-5">*/}
                {/*            <div*/}
                {/*                className="flex w-full gap-3 h-28 border border-custom-gray/30 rounded-lg p-4 cursor-pointer hover:bg-white dark:hover:bg-custom-darker transition-all duration-300 ease-in-out hover:shadow-lg items-center"*/}
                {/*                onClick={() => handleCardClick("/images/illustrations/better-illus.svg")}*/}
                {/*            >*/}
                {/*                <div*/}
                {/*                    className="bg-gray-200 dark:bg-custom-gray shrink-0 rounded-full w-10 h-10 flex items-center justify-center">*/}
                {/*                    <MdLabelImportantOutline className="text-xl text-primary"/>*/}
                {/*                </div>*/}
                {/*                <div className="flex-1 space-y-2 flex items-center">*/}
                {/*                    <div>*/}
                {/*                        <h2 className="text-slateGray dark:text-white">Better Value</h2>*/}
                {/*                        <p className="text-xs text-lightGray">*/}
                {/*                            Enjoy our free TIER. 5x AI providers at &#60; 50% of cost of 1. Note taking*/}
                {/*                            included!*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div*/}
                {/*                className="flex w-full h-28 gap-3 border border-custom-gray/30 rounded-lg p-4 cursor-pointer hover:bg-white dark:hover:bg-custom-darker transition-all duration-300 ease-in-out hover:shadow-lg items-center"*/}
                {/*                onClick={() => handleCardClick("/images/illustrations/freedom-illus.svg")}*/}
                {/*            >*/}
                {/*                <div*/}
                {/*                    className="bg-gray-200 dark:bg-custom-gray shrink-0 rounded-full h-10 w-10 flex items-center justify-center">*/}
                {/*                    <IoMdCheckboxOutline className="text-xl text-primary"/>*/}
                {/*                </div>*/}
                {/*                <div className="flex-1 space-y-2 flex items-center">*/}
                {/*                    <div>*/}
                {/*                        <h2 className="text-slateGray dark:text-white">Freedom of Choice</h2>*/}
                {/*                        <p className="text-xs text-lightGray">*/}
                {/*                            Not every AI is great for every job. Pick the one that's right. No need to*/}
                {/*                            locked in with single provider tools*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div*/}
                {/*                className="flex w-full h-28 gap-3 border border-custom-gray/30 rounded-lg p-4 cursor-pointer hover:bg-white dark:hover:bg-custom-darker transition-all duration-300 ease-in-out hover:shadow-lg items-center"*/}
                {/*                onClick={() => handleCardClick("/images/illustrations/no-copy-illus.svg")}*/}
                {/*            >*/}
                {/*                <div*/}
                {/*                    className="bg-gray-200 dark:bg-custom-gray shrink-0 rounded-full h-10 w-10 flex items-center justify-center">*/}
                {/*                    <TbCopy className="text-xl text-primary"/>*/}
                {/*                </div>*/}
                {/*                <div className="flex-1 space-y-2 flex items-center">*/}
                {/*                    <div>*/}
                {/*                        <h2 className="text-slateGray dark:text-white">No Copy-Pasting</h2>*/}
                {/*                        <p className="text-xs text-lightGray">*/}
                {/*                            Stop Copy-Pasting to ChatGpt. Get your answers right away anywhere*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

            </section>
        </div>
    );
};

export default SectionWhy;