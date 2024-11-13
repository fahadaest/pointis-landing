import Link from "next/link";
import React from "react";
import Image from "next/image";
import {FaXTwitter} from "react-icons/fa6";
import {FaFacebookF, FaGithub, FaInstagram} from "react-icons/fa";

export const Footer: React.FC = () => (
    <footer>
        <div className="bg-custom-darker dark:bg-custom-darker">
            <section>
                <div className="pt-28">
                    <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-4 md:gap-5">
                        <div className="col-span-1 h-[150px]">
                            <div className="flex flex-col space-y-5 px-4 mb-3">
                                <Link className="flex items-center gap-2 " href="/">
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
                                    <p>Unlock all Intelligence Providers in 1 app.</p>
                                    <p>Always 1 click away.</p>
                                </p>
                                <div>
                                    <div className="flex items-center gap-3 text-lightGray">
                                        <a href="#">
                                            <FaXTwitter
                                                className="hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out"/>
                                        </a>
                                        <a href="#">
                                            <FaFacebookF
                                                className="hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out"/>
                                        </a>

                                        <a href="#">
                                            <FaInstagram
                                                className="hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out"/>
                                        </a>
                                        <a href="#">
                                            <FaGithub
                                                className="hover:text-primary hover:scale-110 transition-all duration-300 ease-in-out"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className=" px-3 md:px-5 col-span-1 flex flex-col sm:flex-row md:flex-col lg:flex-row items-start justify-between">
                            <div className="flex w-full gap-10 my-3 lg:my-0 justify-start md:justify-end text-white">
                                <ul className="space-y-3 text-lightGray">
                                    <li className="font-medium text-lg mb-4 text-white">
                                        Resources
                                    </li>
                                    <li className="text-sm">
                                        <a
                                            href="/pp"
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
                                    {/* <li className="text-sm">
                              <a
                                href="#"
                                className="hover:text-gray-300 transition-colors"
                              >
                                About Us
                              </a>
                            </li> */}
                                </ul>
                                {/* TODO: commented out intentionally!  */}
                                {/* <ul className="space-y-3 text-lightGray">
                            <li className="font-medium text-lg mb-4 text-white">
                              Help
                            </li>
                            <li className="text-sm">
                              <a
                                href="#"
                                className="hover:text-gray-300 transition-colors"
                              >
                                Customer Support
                              </a>
                            </li>
                            <li className="text-sm">
                              <a
                                href="#"
                                className="hover:text-gray-300 transition-colors"
                              >
                                Terms & Conditions
                              </a>
                            </li>
                            <li className="text-sm">
                              <a
                                href="#"
                                className="hover:text-gray-300 transition-colors"
                              >
                                Privacy Policy
                              </a>
                            </li>
                          </ul> */}
                            </div>
                            {/* TODO: Add Newsletter */}
                            {/* <div className="py-4 lg:py-0">
                          <div className="flex flex-col space-y-4 text-white">
                            <h4>Subscribe to Newsletter</h4>
                            <div className="relative text-sm">
                              <input
                                type="email"
                                placeholder="Enter email address"
                                className="bg-white text-slateGray rounded-xl py-2.5 px-4 focus:outline-none focus:ring-0"
                              />
                              <button className="absolute  -right-1 top-0 font-medium bg-primary text-white rounded-r-xl py-2.5 px-6">
                                join
                              </button>
                            </div>
                          </div>
                        </div> */}
                        </div>
                    </div>
                </div>

            </section>
        </div>
        {/*<div*/}
        {/*    className="w-[90%] mx-auto flex items-center justify-between py-5 border-t border-t-lightGray/50 dark:text-lightGray">*/}
        {/*    <span className="text-xs text-lightGray">*/}
        {/*        © {new Date().getFullYear()}, All Rights Reserved by PointIs*/}
        {/*    </span>*/}
        {/*    <div className="flex gap-4 pr-3">*/}
        {/*        /!*<Link href="#" className="text-xs hover:underline">*!/*/}
        {/*        /!*  Terms of Service*!/*/}
        {/*        /!*</Link>*!/*/}
        {/*        <Link href="/pp" className="text-xs hover:underline">*/}
        {/*            Privacy*/}
        {/*        </Link>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </footer>
)

// export const Footer: React.FC = () => (
//     <footer>
//         <FooterExtended />
//         <div className="w-[90%] mx-auto flex items-center justify-between py-5 border-t border-t-lightGray/50 dark:text-lightGray">
//             <span className="text-xs text-lightGray">
//                 © {new Date().getFullYear()}, All Rights Reserved by PointIs
//             </span>
//             <div className="flex gap-4 pr-3">
//                 {/*<Link href="#" className="text-xs hover:underline">*/}
//                 {/*  Terms of Service*/}
//                 {/*</Link>*/}
//                 <Link href="/pp" className="text-xs hover:underline">
//                     Privacy
//                 </Link>
//             </div>
//         </div>
//     </footer>
// );
