/**
 * v0 by Vercel.
 * @see https://v0.dev/t/t4lRyb0UtAj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

// 'use server';
"use client";

import { Layout } from "@/components/Layout";

// import ImageGallery from "react-image-gallery";
// // import stylesheet if you're not already using CSS @import
// import "react-image-gallery/styles/css/image-gallery.css";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import { BACKEND_WS, fetchApi, formatForMD, postAnalytics } from "@/lib/utils";
import { useTheme } from "next-themes";
import SectionWhy from "@/app/_components/SectionWhy";
import SectionPricing from "@/app/_components/SectionPricing";
import TypeIt from "typeit-react";

// async function generateBlurDataURL(imagePath: string): Promise<string> {
//     const image = await sharp(imagePath)
//         .blur(10) // Adjust the blur level as needed
//         .toBuffer();
//
//     return `data:image/webp;base64,${image.toString('base64')}`;
// }


// export async function getServerSideProps() {
//     // Fetch data from server
//     console.log("calling mothership")
//     fetch(`${API_ROOT}/a`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({app: "landing", page: "index"})
//     }).then(res => res.json()).catch(err => console.log(err));
// }

// let webSocket: WebSocket | null = null;
//
// const initializeWebSocket = (requestId: string) => {
//     webSocket = new WebSocket(`${BACKEND_WS}/ws/${requestId}`);
//
//     webSocket.onopen = async (event) => {
//         webSocket?.send(JSON.stringify({id: requestId, key: `Bearer ${await getApiToken()}`}))
//     }
//
//     webSocket.onmessage = async (event) => {
//         await sendToActiveTab('wsData', JSON.parse(event.data))
//     };
//
//     webSocket.onclose = (event) => webSocket = null;
// }


export default function Landing() {

    const initialized = useRef(false);
    const { theme, systemTheme } = useTheme();
    const [searchActivated, setSearchActivated] = useState(false);

    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        if (!initialized.current) initialized.current = true;
        postAnalytics("index").finally();
    }, []);

    return (
        <Layout>
            <div>
                <section className="mx-auto max-w-screen-lg py-8 space-y-8 ">
                    <div className="text-center text-slateGray dark:text-white">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                            {/*<span className="text-primary">Access*/}
                            {/*<span className="text-primary">Affordable*/}
                            {/*<span className="text-primary">Applied AI*/}
                            {/*<span className="text-primary">AI Powered*/}
                            {/*<span className="text-primary">Access Any AI*/}
                            {/*<span className="text-primary">Secret AI Toolbox*/}
                            {/*<span className="text-primary">Break Free from AI Lock-in*/}
                            {/*<span className="text-primary">Freedom of AI Choice*/}
                            {/*<span className="text-primary">Get most out of AI.*/}
                            {/*<span className="text-primary">AI-First.*/}
                            {/*<span className="text-primary">All AI Vendors.*/}
                            {/*<span className="text-primary">UI for AI*/}
                            {/*<span className="text-primary">Personal AI*/}
                            <span className="text-primary">Your AI
                                {/*<TypeIt*/}
                                {/*    style={{background: "", color: "", padding: 5}}*/}
                                {/*    options={{loop: true}}*/}
                                {/*    getBeforeInit={(instance) => {*/}
                                {/*      return instance*/}
                                {/*          .type("Summarizer").pause(800).delete().pause(200)*/}
                                {/*          .type("Notebook").pause(800).delete().pause(200)*/}
                                {/*          .type("Content Creator").pause(800).delete().pause(200)*/}
                                {/*          ;*/}
                                {/*    }}*/}
                                {/*/>*/}
                            </span>
                        </h2>
                        <h2 className="-mt-1 text-2xl md:text-3xl lg:text-4xl">
                            {/*One AI&nbsp;*/}
                            {/*Reader, Notes, Content.*/}
                            {/*Where you are.*/}
                            {/*with Access to any AI.*/}
                            {/*Your Memory, Your AI, 1 Click Away*/}
                            {/*All Vendors & Automations, 1 Click Away*/}
                            {/*Learner & Creator's Studio.*/}
                            {/*1 App, 1 Click Away.*/}
                            {/*1 Click Away, Any Vendor.*/}
                            {/*1 Click Away*/}
                            {/*That Remembers Everything*/}
                            <TypeIt
                                style={{background: "", color: "", padding: 5}}
                                options={{loop: true}}
                                getBeforeInit={(instance) => {
                                  return instance
                                      .type("Learns for You").pause(800).delete().pause(200)
                                      .type("Cites Sources").pause(800).delete().pause(200)
                                      .type("10+ Intelligence Providers").pause(800).delete().pause(200)
                                      ;
                                }}
                            />
                        </h2>
                    </div>
                    <p className="text-center text-lg w-4/5 mx-auto text-slateGray dark:text-white">
                        {/*<span className="text-primary">Pointis</span> works for You.*/}
                        Summarize & memorize websites, articles, even YouTube with 1 click.
                        Transcribe meetings, take notes, create content.
                        Get answers tailored for you, based on your data.
                        Powered by 10+ Intelligence Providers.

                        {/*<span className="text-primary">Pointis</span> is Your AI browsing buddy and desktop app. Instantly summarize any content,*/}
                        {/*get personalized answers backed by accurate citations.*/}
                        {/*Enjoy seamless access to AI-driven content creation.*/}

                        {/*<span className="text-primary">Pointis</span> offers handy AI productivity tools in 1 package.*/}
                        {/*Unlike ChatGPT, it is in every page you open, offering <b>Summarization</b>, <b>Note taking</b> and <b>Content Creation</b>.*/}
                        {/*Automatically Organized. Effortlessly Searchable. Offering the Right AI for the job.*/}

                        {/*We put you in control of what AI to use.*/}
                        {/*Learn faster, focus on getting the Point of any material.*/}

                        {/*Pointis summarizes, organizes, helps you create and find information easier.*/}
                        {/*We put you in control of what AI to use.*/}
                        {/*Learn faster, focus on getting the Point of any material.*/}

                        {/*<br/>*/}
                        {/*<br/>*/}
                        {/*Enjoy our Forever Free plan including images generations.*/}

                        {/*Tired of multiple AI subscriptions and constant copy-pasting?*/}
                        {/*No more. Learn, Create, Memorize, Ask with Intelligence of your Choice.*/}
                        {/*Integrated into every page you Browse, as well as Dekstop.*/}

                        {/*<p>Tired of multiple AI subscriptions and constant copy-pasting?</p>*/}
                        {/*<p>Learn, Create, Memorize, Ask with Intelligence of your Choice</p>*/}
                        {/*<p>Integrated into every page you Browse, as well as Dekstop</p>*/}
                        {/*Meet Pointis, Learn, Create, Memorize, Ask 1 Click away, integrated into every page you open.*/}
                        {/*Tired of copy-pasting into multiple AI tools? ChatGPT/Claude/Gemini? Pointis integrates all of them in every page you browse, so you can work smarter, not harder.*/}
                        {/*Why Pointis is your note taking assistant, integrated into every page your open. Let AI summarize things for you. Access all major AI Porviders from 1 app.*/}
                    </p>
                    {/*<p className="px-8 text-center text-base lg:text-lg w-4/5 mx-auto text-slateGray dark:text-white">*/}
                    {/*  Stop switching between tools. Summarize, Create, and Automate*/}
                    {/*  with Pointls. Integrate AI with your everday workflows. Simplify*/}
                    {/*  your research, writing, and content creation.*/}
                    {/*</p>*/}

                    <div className="mt-6 hidden">
                        <div className="flex justify-center items-center gap-3">
                            <a href="/downloads"
                               className="inline-flex text-xs sm:text-sm lg:text-base text-primary border border-primary rounded-2xl py-2 md:py-3 px-5">
                                {/*<Image*/}
                                {/*  src="/images/icons/chrome.svg"*/}
                                {/*  className="mr-1.5"*/}
                                {/*  alt="Chrome"*/}
                                {/*  width={20}*/}
                                {/*  height={20}*/}
                                {/*/>*/}
                                <span>Download</span>
                            </a>

                            {/*<button className="inline-flex text-xs sm:text-sm lg:text-base text-white rounded-full py-3 md:py-4 px-6">*/}
                            {/*  <FaApple className="mr-1 text-xl text-black " />*/}
                            {/*  <span className="text-primary border-b-2 border-b-primary">*/}
                            {/*    Get on MacOS Beta*/}
                            {/*  </span>*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </section>
            </div>

            {/* Landing slider */}
            <div className="flex justify-center items-center pb-12">
                <Image
                    src={`/images/r5/13.png`}
                    // src={`/images/r5/7.png`}
                    // src={`/images/illustrations/landing-illus-${
                    //   currentTheme === "dark" ? "dark" : "light"
                    // }.svg`}

                    alt="Points Applications Suite"
                    // className="rounded-b-2xl border-amber-700 w-[800px] h-auto"
                    className="rounded-b-2xl border-amber-700 w-[800px]"
                    style={{objectFit: "cover", objectPosition: "top", height: 385}}
                    // className="w-96 sm:w-[600px] md:w-[800px] lg:w-[950px] xl:w-[1250px] h-auto"
                    // className="w-96 sm:w-[600px] md:w-[800px] lg:w-[950px] xl:w-[1250px] "
                    width={800}
                    height={500}
                />

                {/*<LandingSlider/>*/}
            </div>

            <div className="flex justify-center items-center pb-12">
                <a href="/downloads"
                   className="bg-primary rounded-full text-sm md:text-base  py-3 mt-2 px-8 text-white">
                    Try for Free
                </a>
            </div>

            {/*<button*/}
            {/*    className="inline-flex text-xs sm:text-sm lg:text-base text-white rounded-full py-3 md:py-4 px-6">*/}
            {/*    /!*<FaApple className="mr-1 text-xl text-black " />*!/*/}
            {/*    <span className="text-primary border-b-2 border-b-primary">*/}
            {/*    Try*/}
            {/*  </span>*/}
            {/*</button>*/}

            {/*<SectionAvailableOn/>*/}
            {/*<SectionAvailableOn />*/}

            {/*<div className="bg-white py-8 dark:bg-custom-darker ">*/}
            {/*<KeyFeatures />*/}
            {/*</div>*/}

            {/*<div className="dark:bg-custom-dark">*/}

            {/*<SectionWhyTextCard />*/}

            <SectionWhy/>

            {/* Why points */}
            {/*<SectionWhy theme={currentTheme} />*/}

            <SectionPricing/>
        </Layout>
    );
};