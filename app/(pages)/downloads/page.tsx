import MainFooter from "@/app/_components/FooterSection";
import { Layout } from "@/components/Layout";
import React from "react";

// Import icons
import { HiExternalLink } from "react-icons/hi";
import { IoIosPhonePortrait } from "react-icons/io";
import {GET_LINUX_LINK, GET_MAC_LINK, GET_STORE_LINK, GET_WIN_LINK} from "@/components/shared";

type Props = {};

const Downloads: React.FC<Props> = (
  {
    // props
  }
) => {
  return (
    <Layout>
      <div className="dark:bg-custom-dark py-6 pb-16">
        <div className="max-w-screen-lgx mx-auto ">
          <div className="py-10">

            <h2 className="text-center text-2xl lg:text-3xl text-slateGray dark:text-white font-semibold">
              Try Pointis <span className="text-primary">for FREE</span>
              {/*Try Pointis <span className="text-primary">Beta</span>*/}
              {/*Download <span className="text-primary">Pointis</span>*/}
            </h2>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-1 mdx:grid-cols-2 gap-7 w-4/5 mx-auto">
              <div className="bg-lightGray/15 rounded-md border border-transparent dark:border-lightGray/80">
                <div className="flex flex-col py-4 px-6 items-center justify-center space-y-5">
                  <h4 className="py-2 text-lg lg:text-xl text-slateGray dark:text-white font-semibold">
                    Browser Extension
                  </h4>
                  <p className="text-gray-600 text-sm dark:text-gray-300 text-center">
                    With the Pointis Browser plugin, you can operate fluidly
                    between tabs without constantly having any other AI model
                    page open.
                  </p>
                  <a href={GET_STORE_LINK}>
                  <button className="py-2 px-10 rounded-full font-medium border border-lightGray/30 text-gray-800 dark:text-white">
                    {/* Chrome icon */}
                    <img src="/images/chrome.png" alt="Chrome icon" className="w-7 h-7 inline-flex mr-2" />
                    Add to Chrome
                  </button>
                  </a>

                  <div className="flex justify-between items-center">
                    <div className="border-b w-14 border-lightGray/60 flex-grow mr-2"></div>
                    <div className="text-black dark:text-gray-300 text-xs">
                      or
                    </div>
                    <div className="border-b w-14 border-lightGray/60 flex-grow ml-2"></div>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <a href={GET_STORE_LINK}>
                      <button className="py-2 rounded-full font-medium text-black dark:text-white">
                        {/* brave icon */}
                        <img src="/images/brave.png" alt="Brave icon" className="w-7 h-7 inline-flex mr-2" />
                        <span className="border-b border-b-primary dark:border-b-white">
                          Brave
                        </span>
                      </button>
                    </a>
                    <a href={GET_STORE_LINK}>
                      <button className="py-2  rounded-full font-medium text-black dark:text-white">
                        {/* Edge icon */}
                        <img src="/images/edge.png" alt="Edge icon" className="w-7 h-7 inline-flex mr-2" />
                        <span>
                          <span className="border-b border-b-primary dark:border-b-white">
                            Edge
                          </span>
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-lightGray/15 rounded-md border border-transparent dark:border-lightGray/80">
                <div className="flex flex-col py-4 px-6 items-center justify-center space-y-5">
                  <h4 className="py-2 text-lg lg:text-xl text-slateGray dark:text-white font-semibold">
                    Desktop App
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                    Pick up where you left of with the Desktop app. Access and Edit your notes, summaries and favorite content creation tools.
                  </p>

                  <a href={GET_MAC_LINK}>
                    <button className="text-black dark:text-white py-2 px-10 rounded-full border border-lightGray/30 ">
                      {/* Chrome icon */}
                      <img
                        src="/images/apple.svg"
                        alt="Apple icon"
                        className="w-7 h-7 inline-flex mr-2"
                      />
                      Download for MacOs
                    </button>
                  </a>

                  <div className="flex justify-between items-center">
                    <div className="border-b w-14 border-lightGray/60 flex-grow mr-2"></div>
                    <div className="text-black dark:text-gray-300 text-xs">
                      or
                    </div>
                    <div className="border-b w-14 border-lightGray/60 flex-grow ml-2"></div>
                  </div>
                  <div className="flex items-center gap-x-5">
                    <a href={GET_WIN_LINK}>
                      <button className="py-2 rounded-full font-medium text-black dark:text-white">
                        <img
                          src="/images/windows.svg"
                          alt="Windows icon"
                          className="w-7 h-7 inline-flex mr-2"
                        />
                        <span className="border-b border-b-primary dark:border-b-white">
                          Windows
                        </span>
                      </button>
                    </a>

                    <a href={GET_LINUX_LINK}>
                      <button className="py-2  rounded-full font-medium text-black dark:text-white">
                        {/* linux icon */}
                        <img
                          src="/images/linux.svg"
                          alt="Linux icon"
                          className="w-7 h-7 inline-flex mr-2"
                        />
                        <span className="border-b border-b-primary dark:border-b-white">
                          Linux
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="bg-white dark:bg-custom-darker py-6 mdxx:h-[450px] flex justify-center items-center">*/}
      {/*  <div className="py-6 mdx:py-10 flex flex-col space-y-6 items-center justify-center">*/}
      {/*    <div>*/}
      {/*      <h2 className="text-center text-2xl lg:text-3xl text-slateGray dark:text-white font-semibold">*/}
      {/*        Try Pointis <span className="text-primary">Beta</span>*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <p className="text-center text-slateGray dark:text-lightGray mt-2 w-2/3 mx-auto">*/}
      {/*        Be the first to use the new updates of Pointis by getting the Beta*/}
      {/*        version. Share your valuable feedbacks for the Beta app to Pointis*/}
      {/*        team.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="flex justify-center items-center">*/}
      {/*      <button className="bg-custom-dark text-white py-4 px-10 font-medium text-xl rounded-md border">*/}
      {/*        Download Beta Version*/}
      {/*      </button>*/}
      {/*    </div>*/}

      {/*    <div>*/}
      {/*      <p className="text-slateGray dark:text-white font-medium">*/}
      {/*        <span className="border-b">Get Instructions to Install Beta</span>*/}
      {/*        <HiExternalLink className="inline-flex mb-1 text-2xl ml-1" />*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

    </Layout>
  );
};

export default Downloads;
