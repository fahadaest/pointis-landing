import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {
  className?: string;
};

const FooterSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <section>
        <div className="pt-16">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-4 md:gap-5">
            {/* Left Column */}
            <div className="col-span-1 h-[150px]">
              <div className="flex flex-col space-y-5 px-4 mb-3">
                <Link className="flex items-center gap-2" href="/">
                  <Image
                    src={`/images/logo/white-logo.svg`}
                    alt="PointIs Logo"
                    className="!w-36 !h-11"
                    width={40}
                    height={40}
                    sizes="75vw"
                  />
                </Link>
                <p className="my-2 text-sm max-w-sm text-lightGray">
                  AI Assist All in One Application extension used for content
                  making and help.
                </p>
                <div>
                  <div className="flex items-center gap-3 text-lightGray">
                    <a href="#">
                      <FaXTwitter className="hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out" />
                    </a>
                    <a href="#">
                      <FaFacebookF className="hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out" />
                    </a>
                    <a href="#">
                      <FaInstagram className="hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out" />
                    </a>
                    <a href="#">
                      <FaGithub className="hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="px-3 md:px-5 col-span-1 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start justify-between">
              <div className="flex w-full gap-10 my-3 lg:my-0 justify-start md:justify-end text-white">
                <ul className="space-y-3 text-lightGray">
                  <li className="font-medium text-lg mb-4 text-white">
                    Resources
                  </li>
                  <li className="text-sm">
                    <a
                      href="#"
                      className="hover:text-gray-300 hover:underline transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="text-sm">
                    <a
                      href="mailto:support@pnt.is"
                      className="hover:text-gray-300 hover:underline transition-colors"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterSection;
