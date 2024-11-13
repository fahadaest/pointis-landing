import React, {useEffect, useState} from 'react';
import { motion  } from 'framer-motion';
import {MdLabelImportantOutline} from "react-icons/md";
import {IoIosCheckmarkCircle, IoMdCheckboxOutline} from "react-icons/io";
import {TbCopy} from "react-icons/tb";

import Image from "next/image";
import {AiOutlineInfoCircle} from "react-icons/ai";

interface Props {
}

const SectionAvailableOn: React.FC<Props> = ({  }) => {

    return (
        <div>
          {/*<div className="bg-white py-8 dark:bg-custom-darker ">*/}
          {/* Available across all platforms */}
          <section className="mx-auto w-4/5 py-8 space-y-8 ">
            <div className="text-center text-2xl lg:text-3xl font-semibold">
              <h2 className="text-slateGray dark:text-white">
                Available for Browser &
                <span className="text-primary ml-1">Desktop</span>{" "}
              </h2>
            </div>
            <div>
              <div className="mt-4">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-4 justify-center text-slateGray dark:text-white">
                  <div className="flex flex-col items-center space-y-3 pl-2">
                    <Image
                      src="/images/chrome.png"
                      alt="Chrome"
                      width={50}
                      height={50}
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                    <span className=" text-sm sm:text-base">Chrome</span>
                  </div>

                  <div className="flex flex-col items-center pr-3 space-y-3 border-r">
                    <Image
                      src="/images/brave.png"
                      alt="Brave"
                      width={50}
                      height={50}
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                    <span className=" text-sm sm:text-base">Brave</span>
                  </div>

                  <div className="flex flex-col items-center space-y-3">
                    <Image
                      src="/images/kiwi.png"
                      alt="Kiwi Browser"
                      width={50}
                      height={50}
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                    <span className="text-sm sm:text-base">
                      Kiwi (Mobile)
                    </span>
                  </div>

                  <div className="flex flex-col items-center space-y-3 border-l pl-3">
                    <Image
                      src={"/images/edge.png"}
                      alt="Edge"
                      width={50}
                      height={50}
                      className="w-12 h-12 sm:w-16 sm:h-16"
                    />
                    <span className=" text-sm sm:text-base">Edge</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
)};

export default SectionAvailableOn;