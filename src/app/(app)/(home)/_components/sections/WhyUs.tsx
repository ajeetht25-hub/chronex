import React from "react";
import WhyUsCard from "../../../_components/WhyUsCard";

const WhyUsCardContent = [
  {
    icon: "/icons/icon1.svg",
    title: "Precision Crafted Timepiece",
    desc: "Engineered with an automatic movement, robust case construction, and refined finishing for lasting performance.",
    link: "/products",
  },
  {
    icon: "/icons/icon2.svg",
    title: "Timeless Design Language",
    desc: "A balanced dial and polished indices create an elegant silhouette that reads as well in the boardroom as on the wrist.",
    link: "/products",
  },
  {
    icon: "/icons/icon3.svg",
    title: "Bespoke Custom Finishes",
    desc: "Choose from a selection of straps, dial treatments, and engravings to personalize your watch with subtlety.",
    link: "/products",
  },
];

const WhyUs = () => {
  return (
    <div className="xl:container xl:mx-auto px-10 py-10 lg:px-20">
      <div className="flex justify-between items-center flex-col gap-4">
        {/* content */}
        <h2 className="rounded-full px-6 py-1 border-white border-2 text-sm text-white">
          Why Us
        </h2>
        <div className="text-white lg:w-[80%] text-center">
          <p className="font-bold text-5xl lg:text-6xl">Precision Crafted Timepiece</p>
          <p className="text-xl lg:text-2xl pt-2">
            Each collection reflects decades of horological expertise, marrying
            mechanical excellence with enduring, refined aesthetics.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-6 pt-5">
          {WhyUsCardContent.map((content, index) => (
            <WhyUsCard {...content} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
