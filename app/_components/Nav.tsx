import { NavItem, ToolItem } from "@/*";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoClose, IoMenu, IoMoon, IoSunny } from "react-icons/io5";

interface NavProps {
  navItems: NavItem[];
}

export const Nav: React.FC<NavProps> = ({ navItems }) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current?.classList.add("bg-white", "shadow-lg");
      } else {
        headerRef.current?.classList.remove("bg-white", "shadow-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (!isMounted) setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 flex h-[80px] items-center justify-between py-3 px-3 md:px-6 lg:px-12 transition-all duration-300 ease-in-out dark:bg-custom-dark"
    >
      <Link href="/" className="flex items-center gap-2 w-[144px] h-[48px]">
        {isMounted && (
          <Image
            // src={`/images/logo/logo-small-${
            //   currentTheme === "dark" ? "dark" : "light"
            // }.svg`}
            // className="w-[48px] h-[48px]"
            src={`/images/logo/logo-${
              currentTheme === "dark" ? "dark" : "light"
            }.svg`}
            className="w-full h-full"
            alt="PointIs Logo"
            width={144}
            height={48}
          />
        )}
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="text-2xl sm:hidden focus:outline-none transition-colors duration-500 ease-in-out"
      >
        {!isMenuOpen && <IoMenu className="text-slateGray dark:text-white" />}
      </button>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex items-center space-x-8 text-slateGray dark:text-white">
        {navItems.map((item: NavItem) => (
          <div
            key={item.href}
            className="relative group"
            onMouseEnter={() => item.tools && setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              href={item.href}
              className="font-medium transition-colors ease-in-out hover:text-primary hover:underline-custom"
            >
              {item.label}
              {item.tools && (
                <IoIosArrowUp className="ml-1 rotate-180 inline" />
              )}
            </Link>

            {item.tools && showDropdown && (
              <div className="absolute -ml-3 mt-0 w-64 bg-white dark:bg-custom-dark shadow-lg dark:shadow-gray-500 p-4 rounded-md z-50">
                {item.tools.map((tool: ToolItem) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block p-2 text-sm text-slateGray dark:text-lightGray rounded-md"
                  >
                    <div className="font-semibold">{tool.label}</div>
                    <div className="text-xs">{tool.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="hidden sm:flex items-center gap-x-6 ">
        <div className="border-r border-r-slateGray/65 dark:border-r-white/65">
          <a
            className="font-medium text-slateGray dark:text-white py-1.5 px-2 pr-9 underline-offset-4"
            href="mailto:support@pnt.is?subject=I%20have%20a%20Suggestion%20for%20Pointis"
          >
            Suggest
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <div>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-xl flex items-center justify-center h-9  w-9 !flex-shrink-0 rounded-full focus:outline-none hover:bg-lightGray/50 transition-all duration-200 ease-in-out group"
          >
            {isMounted && currentTheme === "dark" ? (
              <IoSunny className="text-white group-hover:text-primary transition-colors duration-200 ease-in-out" />
            ) : (
              <IoMoon className="text-slateGray group-hover:text-primary transition-colors duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 !z-50">
          <nav className="fixed top-0 right-0 w-2/3 h-full bg-white dark:bg-custom-dark p-4 z-50">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-2xl text-slateGray dark:text-white"
            >
              <IoClose />
            </button>
            <div className="flex flex-col space-y-5">
              {[
                ...navItems,
                {
                  label: "Contact Us",
                  href: "mailto:support@pnt.is?subject=I%20have%20a%20question%20about%20pointis",
                },
              ].map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slateGray dark:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <div className="w-full">
                <button
                  onClick={() =>
                    setTheme(currentTheme === "dark" ? "light" : "dark")
                  }
                  className=" flex items-center justify-between w-[90%] mr-auto text-slateGray dark:text-white  border-t text-left border-t-lightGray/30 py-2 pt-3"
                >
                  Theme
                  {currentTheme === "dark" ? (
                    <IoSunny className="text-lightGray mr-1" />
                  ) : (
                    <IoMoon className="text-slateGray mr-1" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
