import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useTheme } from "next-themes";
import Image from "next/image";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const LandingSlider = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="dark:bg-custom-dark">
      <AutoplaySlider play={false} cancelOnInteraction={false} interval={6000}>
        <div className="image-gallery-image">
          <Image
            src={`/images/r5/3.png`}
            // src={`/images/illustrations/landing-illus-${
            //   currentTheme === "dark" ? "dark" : "light"
            // }.svg`}
            alt="Landing Illustration Dark"
            width={800}
            height={600}
          />
        </div>

        {/* Content-2 */}
        <div className="w-full flex items-center justify-center">
          <Image
            src={`/images/illustrations/landing-illus-${
              currentTheme === "dark" ? "dark" : "light"
            }.svg`}
            alt="Landing Illustration Dark"
            className="w-96 sm:w-[400px] md:w-[600px] lg:w-[750px] xl:w-[850px] h-auto"
            width={800}
            height={500}
          />
        </div>

        {/* Content-3 */}
        <div className="w-full flex items-center justify-center">
          <Image
            src={`/images/illustrations/landing-illus-${
              currentTheme === "dark" ? "dark" : "light"
            }.svg`}
            alt="Landing Illustration Dark"
            className="w-96 sm:w-[400px] md:w-[600px] lg:w-[750px] xl:w-[850px] h-auto"
            width={800}
            height={500}
          />
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default LandingSlider;
