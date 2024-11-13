import FooterSection from "@/app/_components/FooterSection";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {};

export default function Gallery({}: Props) {
  return (
    <Layout title="Gallery">
      <div className="dark:bg-custom-dark space-y-6">
        <div className="mx-auto w-4/5 xl:max-w-screen-2xl py-8 space-y-6 ">
          <div>
            <h2 className="text-center text-2xl lg:text-3xl text-slateGray dark:text-white font-semibold">
              Data Science
              <span className="text-primary underline ml-1">made easy!</span>
            </h2>
          </div>

          <div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
              </div>
              <div className="h-72 rounded-lg bg-custom-darker"></div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-4/5 xl:max-w-screen-2xl py-8 space-y-6 ">
          <div>
            <h2 className="text-center text-2xl lg:text-3xl text-slateGray dark:text-white font-semibold">
              No matter its
              <span className="text-primary underline ml-1.5">
                Web or Desktop
              </span>
            </h2>
          </div>

          <div>
            <div className="space-y-6">
              {/* Gallery slider */}
              <div className="grid grid-cols-2 gap-5">
                <div className="h-96 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-96 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-4/5 xl:max-w-screen-2xl py-8 space-y-6 ">
          <div>
            <h2 className="text-center text-2xl lg:text-3xl text-slateGray dark:text-white font-semibold">
              Extract
              <span className="text-primary underline mx-1.5">Content</span>
              from nothing
            </h2>
          </div>

          <div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
                <div className="h-72 rounded-lg bg-custom-darker">
                  {/* Card content */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="dark:bg-custom-darker">
            <div>
              <div className="w-[90%] sm:w-4/5 transform translate-y-1/2 mx-auto h-64 md:h-72 py-8 bg-primary rounded-lg flex flex-col items-center justify-center">
                <h4 className="text-2xl lg:text-3xl text-white my-2 sm:my-3 font-semibold">
                  Ready to Get Started ?
                </h4>
                <p className="w-4/5 sm:w-3/5 text-sm  md:text-base my-3 text-center mx-auto text-white">
                  Points will be installed in your browser as an extension
                  allows you to get assistance and innovation all the time.
                </p>
                <button className="bg-black rounded-full text-sm md:text-base  py-3 mt-2 px-8 text-white">
                  Download the App now
                </button>
              </div>
            </div>
          </div>
          <div>
            <FooterSection className="bg-custom-darker dark:bg-custom-dark pt-32" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
