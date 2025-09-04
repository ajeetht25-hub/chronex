import React from "react";
import EmblaCarousel from "../EmblaCarousel";
import type { EmblaOptionsType } from "embla-carousel";

import HeroCard from "../HeroCard";
import Navbar from "@/app/(app)/_components/layout/Navbar";

const Hero = () => {
  const OPTIONS: EmblaOptionsType = { axis: "x", direction: "ltr", loop: true };
  const content = [
    {
      imageUrl: "/img/watchimg.jpg",
      title: "Redefining Luxury Timepieces.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    },
    {
      imageUrl: "/img/watchimg.jpg",
      title: "Redefining Luxury Timepieces.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    },
    {
      imageUrl: "/img/watchimg.jpg",
      title: "Redefining Luxury Timepieces.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    },
  ];

  const SLIDES = content.map((slide, index) => (
    <HeroCard
      key={index}
      imageUrl={slide.imageUrl}
      title={slide.title}
      description={slide.description}
    />
  ));

  return (
    <div className="px-5 lg:px-20 w-full xl:container xl:mx-auto h-screen pb-32 pt-2">
      <Navbar />
      <EmblaCarousel options={OPTIONS} slides={SLIDES} />
    </div>
  );
};

export default Hero;
