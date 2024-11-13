import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  header: string;
  text: string;
}

function FeatureStyle1({ icon, header, text }: FeatureCardProps): JSX.Element {
  return (
    <div className="text-slateGray dark:text-white p-6 rounded-lg hover:!bg-primary transition-colors duration-300 ease-linear group cursor-pointer">
      {icon}
      <h2 className="text-xl font-bold mb-2">{header}</h2>
      <p className="">{text}</p>
    </div>
  );
}

export default FeatureStyle1;
