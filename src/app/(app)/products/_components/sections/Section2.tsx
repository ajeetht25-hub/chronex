import React from "react";
import WhyUsCard from "../../../_components/WhyUsCard";

const WhyUsCardContent = [
  {
    icon: "/icons/icon1.svg",
  title: "Heritage Oyster timepiece",
  desc: "A meticulously engineered automatic movement in a corrosion-resistant case, offering precise timekeeping and enduring elegance.",
    link: "/about",
  },
  {
    icon: "/icons/icon2.svg",
  title: "Heritage Oyster timepiece",
  desc: "A meticulously engineered automatic movement in a corrosion-resistant case, offering precise timekeeping and enduring elegance.",
    link: "/about",
  },
  {
    icon: "/icons/icon3.svg",
  title: "Heritage Oyster timepiece",
  desc: "A meticulously engineered automatic movement in a corrosion-resistant case, offering precise timekeeping and enduring elegance.",
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
