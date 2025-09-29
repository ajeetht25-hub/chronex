import React from "react";
import WhyUsCard from "../../../_components/WhyUsCard";

const WhyUsCardContent = [
  {
    icon: "/icons/icon1.svg",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "/about",
  },
  {
    icon: "/icons/icon2.svg",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "/about",
  },
  {
    icon: "/icons/icon3.svg",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "/about",
  },
];

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
