"use client";

import { View } from "@react-three/drei";
import React, { useEffect } from "react";
import AboutAnimation from "./AboutAnimation";
import { Button } from "@/components/ui/button";
import Navbar from "../../_components/layout/Navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useStore } from "../../_store/store";
import Link from "next/link";

const FullPage = () => {
  const isMobile = useIsMobile();
  const {setIsMobile} = useStore();

  useEffect(() => {
    setIsMobile(isMobile);
  },[isMobile,setIsMobile]);
  
  return (
    <div className="about-container relative xl:container xl:mx-auto flex justify-between items-center flex-col gap-5 px-4 md:px-10  text-white lg:px-20">
      <div className="about-sections-container relative w-full">
        <View className="about-watch absolute left-0 top-0 pointer-events-none z-50 h-screen w-full ">
          <AboutAnimation />
        </View>
        <div className="about-section1  w-full lg:h-screen relative z-[999]">
          {/* hero */}
          <Navbar />
          {/* <div className="flex flex-col lg:flex-row justify-between items-center"> */}
          <div className="block lg:hidden h-[40rem]"></div>
          <div className="flex z-50 -mt-20 flex-col flex-start lg:w-1/3 items-start justify-center h-full gap-6">
            <h2 className="font-bold text-4xl lg:text-6xl leading-tight">
              Heritage Oyster timepiece
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
              Crafted with precision, our watches blend classic design with
              robust engineering for reliable performance and refined comfort.
            </p>
            <Link href="/customer" className="text-black bg-white bg-gradient-to-b from-white to-[#4DC6E2] text-xl font-bold py-3 px-6 rounded-xl h-auto">
              Know More
            </Link>
            {/* </div> */}
          </div>
        </div>
        <div className="about-section2 flex justify-center items-center w-full pt-20 lg:pt-20 h-screen">
          {/* second */}
          <div className="flex relative flex-col w-full h-full items-center justify-center lg:-mt-20">
            <h2 className="font-bold text-3xl lg:w-4/5 text-center lg:text-8xl leading-tight z-10">
              Heritage Oyster timepiece
            </h2>
            <p className="text-[19rem] leading-[1] text-black font-bold select-none">
              SWISS
            </p>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black hidden lg:block lg:text-[19rem] leading-snug custom-stroke font-bold select-none">
              SWISS
            </p>
            <p className="text-2xl lg:text-2xl lg:w-1/2 text-center text-gray-300">
              Every component is finished by hand and tuned to exacting
              tolerances, delivering accuracy and enduring style.
            </p>
            <div className="flex justify-center items-center pt-8">
              <Button className="cursor-pointer text-black bg-white bg-gradient-to-b from-white to-[#4DC6E2] text-xl font-semibold py-3 px-6 rounded-xl h-auto">
                Know More
              </Button>
            </div>
          </div>
        </div>
        <div className="about-section3 flex justify-between items-center w-full h-screen">
          {/* third */}
          <div className="flex relative flex-col w-full h-full items-center justify-center">
            <div className="flex flex-col justify-center items-center z-50 py-10 bg-black/30 ">
              <h2 className="font-bold text-3xl lg:w-2/3 text-center lg:text-8xl leading-tight z-10">
                Heritage Oyster timepiece
              </h2>
              <p className="text-2xl lg:text-2xl lg:w-1/2 text-center text-gray-300">
                Each model is assembled and adjusted to ensure consistent
                precision, combining traditional craftsmanship with modern
                materials for long-lasting performance.
              </p>
              <div className="flex justify-center items-center pt-8">
                <Button className="cursor-pointer text-black bg-white bg-gradient-to-b from-white to-[#4DC6E2] text-xl font-semibold py-3 px-6 rounded-xl h-auto">
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section4 flex justify-between items-center w-full h-screen">
          {/* fourth */}
          <div className="flex relative flex-col w-full h-full items-center justify-start lg:pt-10">

            <h2 className="font-bold text-3xl lg:w-2/3 text-center lg:text-8xl leading-tight z-10">
              Heritage Oyster timepiece
            </h2>
            <p className="text-2xl lg:text-2xl lg:w-1/2 text-center text-gray-300">
              Discover bespoke customization options to personalize your
              watch —from dial finishes to straps—crafted to complement your
              lifestyle.
            </p>
          <div className="block lg:hidden h-[30rem]"></div>
          </div>
        </div>
        <div className="about-section5 flex justify-between items-center w-full h-screen">
          {/* five */}
        </div>
      </div>
      <div className="about-dummy flex justify-between items-center w-full lg:h-[10rem]">
        {/* dummy */}
      </div>
    </div>
  );
};

export default FullPage;
