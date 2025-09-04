import React from "react";
// import WhyUsCard from "../../../_components/WhyUsCard";

const WhyUsCardContent = [
  {
    icon: "/icons/icon1.svg",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "#",
  },
  {
    icon: "/icons/icon2.svg",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "#",
  },
  {
    icon: "/icons/icon3.svg",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "#",
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
        <div className="text-white lg:w-1/2 text-center">
          <p className="font-bold text-5xl lg:text-6xl">Lorem Ipsum Si Dolor Amet</p>
          <p className="text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-6 pt-5">
          {/* {WhyUsCardContent.map((content, index) => (
             <WhyUsCard {...content} key={index} />
           ))} */}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
