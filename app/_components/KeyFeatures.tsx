import React from "react";
import { motion } from "framer-motion";
import Summary from "@/public/images/icons/Summary";
import Create from "@/public/images/icons/Create";
import Automate from "@/public/images/icons/Automate";
import exp from "constants";

// Type for feature item
interface Feature {
  title: string;
  description: string;
  Icon: React.FC<{ props: React.SVGProps<SVGSVGElement> }>;
}

const KeyFeatures: React.FC = () => {
  // List of features
  const features: Feature[] = [
    {
      title: "Summarize",
      description:
        "Summarize YouTube videos, emails, and web pages in one click and a second.",
      Icon: Summary,
    },
    {
      title: "Create",
      description:
        "Write a post, article, reply, improve your writing, right where you are.",
      Icon: Create,
    },
    {
      title: "Automate",
      description:
        "See interesting video? Paragraph? A page? Add to your notes with one click.",
      Icon: Automate,
    },
  ];

  return (
    <div>
      <section className="mx-auto w-4/5 py-16 space-y-14">
        <div>
          <h2 className="text-center text-2xl lg:text-3xl text-slateGray dark:text-white font-semibold">
            Key <span className="text-primary">Features</span>
          </h2>
          <div className="my-4 mb-6">
            <p className="px-8 text-center text-sm lg:text-base max-w-screen-xs mx-auto text-lightGray dark:text-white">
              Simplify Your Workflow with Points. Most tools lock you into one
              platform. With Pointls, you get everything you need!
            </p>
          </div>
        </div>

        <div className="h-96 w-full text-xl text-lightGray bg-custom-dark rounded-lg flex items-center justify-center">
          Contents will be added here soon.
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {/* Features */}
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Type for FeatureCard component
interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  feature: { title, description, Icon },
}) => {
  return (
    <motion.div
      whileHover={{ scaleY: 1.05 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="px-5 py-4 rounded-lg shadow h-56 md:h-64 lg:h-72 cursor-pointer bg-white dark:bg-custom-dark hover:!bg-primary transition-colors duration-300 ease-linear group"
    >
      <div className="flex flex-col items-start space-y-4 lg:space-y-5">
        <div className="bg-white border border-gray-400/50 rounded-full p-2 lg:p-3 flex items-center justify-center">
          <Icon
            props={{
              className:
                "w-6 h-6 lg:w-8 lg:h-8 text-slateGray group-hover:text-primary",
            }}
          />
        </div>
        <span className="font-semibold text-xl text-slateGray dark:text-white group-hover:text-white transition-colors duration-300 ease-in-out">
          {title}
        </span>
        <p className="text-lightGray text-sm dark:text-white group-hover:text-white transition-colors duration-300 ease-in-out">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default KeyFeatures;
