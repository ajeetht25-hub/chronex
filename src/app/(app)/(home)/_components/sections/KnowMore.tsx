"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import { Environment, View } from "@react-three/drei";
import AlternativeWatch from "../Scenes/AlternativeWatch";
import { useIsMobile } from "@/hooks/use-mobile";
import { useStore } from "@/app/(app)/_store/store";
import { X } from "lucide-react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Group } from "three";
import Watch from "@/app/(app)/_components/Canvas/Watch";
import Image from "next/image";

const WatchSpecs = ({
  no,
  title,
  desc,
}: {
  no: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="feature-box p-6 rounded-xl w-[20rem] bg-black/50 lg:w-[25rem] h-[260px] lg:h-auto flex flex-col overflow-hidden">
      <div className="relative mb-6 lg:mb-10 w-full">
        <p className="absolute hidden lg:block lg:-z-10 -top-20 lg:-top-28 left-0 font-outline-2 font-bold text-[7rem] lg:text-[9.4rem] text-transparent">
          {no}
        </p>
        <p className="font-bold text-3xl lg:text-5xl">{title}</p>
      </div>
      <p className="text-sm lg:text-xl w-full overflow-y-auto flex-1">{desc}</p>
    </div>
  );
};

const KnowMore = () => {
  const [activeCard, setActiveCard] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { setIsMobile } = useStore();
  const [showThreeDModal, setShowThreeDModal] = useState(false);

  useEffect(() => {
    setIsMobile(isMobile);
  }, [isMobile, setIsMobile]);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollLeft;
      const cardWidth = container.clientWidth;

      const cardIndex = Math.round(scrollPosition / cardWidth);
      setActiveCard(Math.min(Math.max(0, cardIndex), 3));
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const ModalMain = () => {
    const watchRef = useRef<Group>(null);
    const { camera } = useThree();

    useEffect(() => {
      camera.position.set(0, 0, isMobile ? 2.5 : 2.2);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }, [camera]);
    return (
      <group ref={watchRef} position={[0, -1, 0]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <Watch />
        <Environment files={"/hdr/photo_studio.hdr"} environmentIntensity={3} />
        <OrbitControls enableZoom={false} />
      </group>
    );
  };

  const ModalThreeD = () => {
    return (
      <Canvas>
        <ModalMain />
      </Canvas>
    );
  };

  return (
    <div className="knowmore-container relative xl:container xl:mx-auto flex justify-between items-center flex-col gap-5 px-4 md:px-10 py-10 text-white lg:px-20">
      <View className="knowmore-watch -mt-10 absolute top-0 pointer-events-none z-50 h-screen w-full">
        <AlternativeWatch />
      </View>
      <div className="knowmore-section relative z-[60] lg:z-0 flex justify-between flex-col lg:flex-row items-center w-full h-screen">
        {/* section one */}
        <div className="lg:block ">{/* img placeholder */}</div>
        <div className="flex flex-col gap-5 justify-end items-end text-end w-full lg:w-3/4 bg-black/30 lg:bg-transparent ">
          <h2 className="font-bold text-4xl lg:text-6xl xl:text-8xl text-right">
            Heritage Oyster timepiece
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl lg:w-4/5 text-right">
            Designed for daily wear, our watches combine durable engineering
            with refined detailing to perform reliably while looking impeccable.
          </p>
        </div>
      </div>
      <div className="knowmore-section flex flex-col relative z-[60] lg:z-0 lg:flex-row justify-between items-center w-full h-screen">
        {/* section two */}
        <div className=" lg:hidden">{/* img placeholder */}</div>

        <div className="flex flex-col gap-5 justify-start items-start text-start w-full lg:w-4/5 bg-black/30 lg:bg-transparent ">
          <h2 className="font-bold text-4xl lg:text-6xl xl:text-8xl text-left">
            Crafting luxurious watches
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl lg:w-4/5 text-left">
            Our artisans assemble and finish each movement by hand, ensuring
            precision regulation and a level of quality that endures for years.
          </p>
        </div>
        <div className="hidden lg:block">{/* img placeholder */}</div>
      </div>

      <div className="knowmore-section flex flex-col relative z-[60] lg:z-0 lg:h-fit h-screen justify-center items-center w-full lg:min-h-screen">
        <div className="features-container w-full mt-16 lg:mt-32 relative">
          <div
            ref={scrollContainerRef}
            className="flex flex-row lg:grid lg:grid-cols-2 justify-start lg:justify-between items-start gap-8 lg:gap-2 
            w-full md:w-auto overflow-x-auto pb-10 px-4 md:px-0 bg-transparent
            [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory"
          >
            <div className="flex-shrink-0 snap-center flex justify-center lg:justify-start items-center">
              <WatchSpecs
                no={"01"}
                title="Automatic Movement"
                desc="A high-performance automatic caliber with winding efficiency and a multi-day power reserve for consistent accuracy."
              />
            </div>

            <div className="flex-shrink-0 snap-center flex justify-center lg:justify-end items-center">
              <WatchSpecs
                no={"02"}
                title="Sapphire Crystal"
                desc="Domed sapphire glass with anti-reflective treatment for clarity and scratch resistance in everyday use."
              />
            </div>

            <div className="flex-shrink-0 snap-center flex justify-center lg:justify-start items-center">
              <WatchSpecs
                no={"03"}
                title="Water Resistant"
                desc="Engineered to resist water ingress to 100 meters, suitable for swimming and daily activities with confidence."
              />
            </div>

            <div className="flex-shrink-0 snap-center flex justify-center lg:justify-end items-center">
              <WatchSpecs
                no={"04"}
                title="Custom Straps"
                desc="Interchangeable straps in leather, metal, and rubber allow you to tailor the look to any occasion or preference."
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 absolute bottom-0 left-0 right-0 mb-1 md:hidden">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`${
                  activeCard === index
                    ? "w-6 bg-opacity-70"
                    : "w-2 bg-opacity-30"
                } h-2 rounded-full bg-white transition-all duration-300`}
              ></div>
            ))}
          </div>

          <div className="justify-center flex-col gap-2 relative z-[999] items-center flex mt-16">
            <Button
              onClick={() => setShowThreeDModal(true)}
              className="text-white bg-transparent text-base lg:text-xl font-bold py-2 lg:py-2 px-4 lg:px-6 rounded-xl h-auto hover:bg-transparent border-[1px] border-white cursor-pointer relative z-[999]"
            >
              Enter{" "}
              <div className="relative h-10 w-10 ml-2">
                <Image
                  src={"/icons/degree.png"}
                  alt="360 degree icon"
                  fill
                  className="object-contain"
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* 3D Modal */}
      {showThreeDModal && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-[90%] h-[90%] max-w-4xl bg-black/90 rounded-xl overflow-hidden border-2 border-white">
            <button
              onClick={() => setShowThreeDModal(false)}
              className="absolute top-4 cursor-pointer right-4 z-[1010] p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="w-full h-full">
              <div className="w-full h-full">
                <ModalThreeD />
              </div>
            </div>
            <div className="relative h-10 w-10">
              <Image
                src={"/icons/degree.png"}
                alt="360 degree icon"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowMore;
