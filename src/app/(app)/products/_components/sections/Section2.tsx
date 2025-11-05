import React from "react";
import WhyUsCard from "../../../_components/WhyUsCard";

const WhyUsCardContent = [
  {
    icon: "/icons/icon1.svg",
    title: "Precision Movement",
    desc: "Powered by advanced mechanical engineering, this timepiece ensures flawless accuracy and smooth performance in every tick.",
    link: "/about"
  },
  {
    icon: "/icons/icon2.svg",
    title: "Master Craftsmanship",
    desc: "Hand-assembled by expert artisans, each watch embodies decades of horological mastery and elegant sophistication.",
    link: "/about"
  },
  {
    icon: "/icons/icon3.svg",
    title: "Enduring Design",
    desc: "Built to transcend trends, our designs combine durability and artistry to create a watch that lasts a lifetime.",
    link: "/about"
  }
]



const Section2 = () => {
  return (
    <div className="xl:container xl:mx-auto px-10 py-10 lg:px-20">
      <div className="flex lg:flex-row flex-col gap-6 pt-5">
        {WhyUsCardContent.map((content, index) => (
          <WhyUsCard {...content} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Section2;
