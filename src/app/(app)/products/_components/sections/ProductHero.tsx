"use client";
import Link from "next/link";
import React from "react";

const Content = [
  {
    icon: "/img/icon1.png",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "#",
  },
  {
    icon: "/img/icon2.png",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "#",
  },
  {
    icon: "/img/icon3.png",
    title: "Lorem Ipsum Si dolor amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    link: "#",
  },
];

const ProductHero = () => {
  return (
    <div className="px-5 lg:px-20 xl:container xl:mx-auto pb-3 pt-2">
      <div
        className="relative text-white flex justify-start items-start h-full w-full"
      >
        <div className=" bg-black bg-opacity-40 w-full h-full relative rounded-2xl lg:rounded-[2.5rem]">
          <div className="">
            <div className=" text-start flex justify-start items-start flex-col gap-5">
              <h1 className="lg:text-[9rem] text-5xl font-bold">
                Redefining Luxury Timepieces.
              </h1>
              <p className="text-2xl w-full lg:w-2/3">
                Experience the fusion of art and precision. Our handcrafted watches are built to reflect your personality — timeless, bold, and uniquely yours.
              </p>
              <Link
                href={"/customer"}
                className="text-black bg-white bg-gradient-to-b from-white to-[#4DC6E2] text-xl font-bold py-3 px-6 rounded-xl h-auto"
              >
                Start Customizing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
