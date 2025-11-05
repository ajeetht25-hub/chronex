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
        "Experience the fusion of art and precision. Our handcrafted watches are built to reflect your personality — timeless, bold, and uniquely yours.",
    },
    {
      imageUrl: "/img/watchimg.jpg",
      title: "Crafted for the Connoisseurs.",
      description:
        "Every detail matters. From the dial to the crown, our timepieces are engineered with meticulous craftsmanship and cutting-edge design.",
    },
    {
      imageUrl: "/img/watchimg.jpg",
      title: "Your Time, Your Design.",
      description:
        "Customize every element — from materials to movement. Design a watch that resonates with your style and tells your story with every tick.",
    },
    {
      imageUrl: "/img/watchimg.jpg",
      title: "Luxury in Motion.",
      description:
        "Where elegance meets innovation. Our next-generation timepieces redefine what it means to wear luxury on your wrist.",
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
