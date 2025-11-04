"use client";
import { useState, useEffect } from "react";
import SubmissionDialog from "./SubmissionDialog";
import Image from "next/image";
import { MoveLeft, MoveRight, ChevronRight } from "lucide-react";

import InfiniteScroll from "./Textanimation";
import Sprite from "./Sprite";
import { useCustomerSubmitQuery } from "./(forms)/customer-submit-query";

export default function CustomerPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);
  const [step, setStep] = useState(1);
  const { loading } = useCustomerSubmitQuery();
  const [selectedMaterial, setSelectedMaterial] = useState(1);
  const [selectedDial, setSelectedDial] = useState(1);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [animationType, setAnimationType] = useState<
    "default" | "bezel" | "toggle" | "backStrap"
  >("default");
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);

  const materials: ["White Gold", "Yellow Gold", "Rose Gold"] = [
    "White Gold",
    "Yellow Gold",
    "Rose Gold",
  ];
  const dials = ["Light Dial", "Coloured Dial", "Dark Dial"];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const animationSequences = {
    default: ["/img/frame436.png"], 
    bezel: Array.from(
      { length: 27 },
      (_, i) => `/img/watch-sequence/Dial/frame${333 + i}.png`
    ),
    toggle: Array.from(
      { length: 52 },
      (_, i) => `/img/watch-sequence/Toggle/frame${327 + i}.png`
    ),
    backStrap: Array.from(
      { length: 56 },
      (_, i) => `/img/watch-sequence/Strap/frame${379 + i}.png`
    ),
  };

  const [currentAnimationSequence, setCurrentAnimationSequence] = useState(
    animationSequences.default
  );

  const handlePartClick = (
    part: "default" | "bezel" | "toggle" | "backStrap"
  ) => {
    if (!isAnimationComplete) return;

    setIsAnimationComplete(false);
    setAnimationType(part);

    setCurrentAnimationSequence([]);

    requestAnimationFrame(() => {
      if (part === "default") {
        setCurrentAnimationSequence(animationSequences.default);
      } else {
        setCurrentAnimationSequence(animationSequences[part]);
      }
    });
  };

  const materialBgColors = {
    "White Gold": "from-black from-30% to-[#E0E0E0]",
    "Yellow Gold": "from-black from-30% to-[#D09B5E]",
    "Rose Gold": "from-black from-30% to-[#B76E79]",
  };

  const dialBgColors = {
    "Light Dial": "from-black from-30% to-[#A8A8A8]",
    "Coloured Dial": "from-black from-30% to-[#7B68EE]",
    "Dark Dial": "from-black from-30% to-[#2F4F4F]",
  };

  const getCurrentBgColor = () =>
    step === 1
      ? materialBgColors[materials[selectedMaterial]]
      : dialBgColors[dials[selectedDial] as keyof typeof dialBgColors];

  useEffect(() => {
    setTimeout(() => setIsFormOpen(true), 100);
  }, []);

  const handleFinish = async () => {
    try {
      setIsSubmissionOpen(true);
    } catch (err) {
      console.error("Error saving product:", err);
    }
  };

  const materialItems = materials.map((mat, i) => ({
    content: (
      <div
        className={`cursor-pointer flex items-center gap-6 transition-all ${
          selectedMaterial === i ? "text-white font-bold" : "text-transparent"
        }`}
        onClick={() => setSelectedMaterial(i)}
      >
        <span className="w-4">{selectedMaterial === i ? "▶" : ""}</span>
        {mat}
      </div>
    ),
  }));

  const dialItems = dials.map((dial, i) => ({
    content: (
      <div
        className={`cursor-pointer flex items-center gap-6 transition-all ${
          selectedDial === i ? "text-white font-bold" : "text-transparent"
        }`}
        onClick={() => setSelectedDial(i)}
      >
        <span className="w-4">{selectedDial === i ? "▶" : ""}</span>
        {dial}
      </div>
    ),
  }));

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br ${getCurrentBgColor()} text-white px-4 lg:px-8 transition-all duration-500`}
    >
      {isSubmissionOpen && (
        <SubmissionDialog
          isOpen={isSubmissionOpen}
          setIsOpen={setIsSubmissionOpen}
        />
      )}
      {!isFormOpen &&
        !isSubmissionOpen &&
        (isSmallScreen ? (
          <div className="w-full px-4 py-6 flex flex-col items-center">
            <h1 className="text-white font-bold text-3xl mb-4">Watch Name</h1>

            {/* Sprite Watch */}
            <div className="relative w-[500px] h-[500px] mb-4 z-1">
              <Sprite
                images={currentAnimationSequence}
                fps={24}
                width={500}
                height={500}
                loop={false}
                autoplay={true}
                animationType={animationType}
                onComplete={() => setIsAnimationComplete(true)}
              />
            </div>

            {/* Part Buttons */}
            <div className="flex justify-center gap-4 mt-8 z-10">
              <button
                onClick={() => handlePartClick("default")}
                className={`rounded-full transition-all ${
                  animationType === "default" ? "ring-2 ring-white" : ""
                }`}
              >
                <Image
                  src="/img/frame436.png"
                  className="rounded-full w-8 h-8 object-cover"
                  alt="Default View"
                  width={40}
                  height={40}
                />
              </button>
              <button
                onClick={() => handlePartClick("bezel")}
                className={`rounded-full transition-all ${
                  animationType === "bezel" ? "ring-2 ring-white" : ""
                }`}
              >
                <Image
                  src="/img/frame244.jpg"
                  className="rounded-full w-8 h-8 object-cover"
                  alt="Bezel View"
                  width={40}
                  height={40}
                />
              </button>
              <button
                onClick={() => handlePartClick("toggle")}
                className={`rounded-full transition-all ${
                  animationType === "toggle" ? "ring-2 ring-white" : ""
                }`}
              >
                <Image
                  src="/img/frame90.jpg"
                  className="rounded-full w-8 h-8 object-cover"
                  alt="Toggle View"
                  width={40}
                  height={40}
                />
              </button>
              <button
                onClick={() => handlePartClick("backStrap")}
                className={`rounded-full transition-all ${
                  animationType === "backStrap" ? "ring-2 ring-white" : ""
                }`}
              >
                <Image
                  src="/img/frame186.jpg"
                  className="rounded-full w-8 h-8 object-cover"
                  alt="Strap View"
                  width={40}
                  height={40}
                />
              </button>
            </div>

            {/* Text & Options */}
            <div className="text-center">
              <h2 className="font-bold text-xl mb-2">
                {step === 1
                  ? "Choose your own material"
                  : "Choose your own dial"}
              </h2>
              <div className="flex justify-center gap-3 text-sm mb-4">
                {(step === 1 ? materials : dials).map((item, i) => (
                  <span
                    key={i}
                    onClick={() =>
                      step === 1 ? setSelectedMaterial(i) : setSelectedDial(i)
                    }
                    className={`cursor-pointer ${
                      (step === 1 ? selectedMaterial : selectedDial) === i
                        ? "text-white font-semibold"
                        : "text-transparent"
                    }`}
                  >
                    {item}
                  </span>
                ))}
                <ChevronRight size={14} />
              </div>

              {/* Price and Actions */}
              <div className="flex justify-between items-center px-4 w-full">
                <div className="text-left">
                  <p className="text-sm mb-1">Price:</p>
                  <p className="text-lg font-bold">1,50,000</p>
                </div>

                <div className="flex gap-2">
                  {step === 1 ? (
                    <>
                      <button
                        className="px-4 py-1 bg-white text-black rounded text-sm"
                        onClick={() => setStep(2)}
                      >
                        Dial
                      </button>
                      <button
                        className="p-2 bg-white text-black rounded"
                        onClick={() => setStep(2)}
                      >
                        <MoveRight size={16} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="p-2 bg-white text-black rounded"
                        onClick={() => setStep(1)}
                      >
                        <MoveLeft size={16} />
                      </button>
                      <button
                        className="px-4 py-1 bg-white text-black rounded text-sm"
                        onClick={handleFinish}
                      >
                        Finish
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute w-full max-w-7xl">
            <div className="text-center mb-8">
              <h1 className="text-white font-bold text-5xl">Watch Name</h1>
            </div>
            <div className="flex flex-row items-center justify-between w-full h-[600px]">
              {/* Left Panel */}
              <div className="w-1/4 flex flex-col gap-5 z-10">
                <h1 className="font-bold text-5xl">
                  {step === 1
                    ? "Choose your own material"
                    : "Choose your own dial"}
                </h1>
                <div className="w-32 border-t-4 border-white my-2" />
                <div className="flex gap-3">
                  {step === 1
                    ? ["default", "bezel", "toggle", "backStrap"].map(
                        (part) => (
                          <button
                            key={part}
                            className={`rounded-full w-13 h-13 transition-all duration-300 ${animationType === part ? "ring-2 ring-white" : "hover:ring-2 hover:ring-white"}`}
                            onClick={() => handlePartClick(part as any)}
                          >
                            <Image
                              src={`/img/${part === "default" ? "frame436" : part === "bezel" ? "frame244" : part === "toggle" ? "frame90" : "frame186"}.jpg`}
                              className="rounded-full"
                              alt={`${part} view`}
                              width={80}
                              height={80}
                            />
                          </button>
                        )
                      )
                    : 
                      ["default", "bezel", "toggle", "backStrap"].map(
                        (part) => (
                          <button
                            key={part}
                            className={`rounded-full w-13 h-13 transition-all duration-300 ${animationType === part ? "ring-2 ring-white" : "hover:ring-2 hover:ring-white"}`}
                            onClick={() => handlePartClick(part as any)}
                          >
                            <Image
                              src={`/img/${part === "default" ? "frame436" : part === "bezel" ? "frame244" : part === "toggle" ? "frame90" : "frame186"}.jpg`}
                              className="rounded-full"
                              alt={`${part} view`}
                              width={80}
                              height={80}
                            />
                          </button>
                        )
                      )}
                </div>
                <p className="text-3xl font-bold">Price: 150,000</p>
              </div>

              {/* Center - Sprite Layered with Z-index */}
              <div className="relative w-full h-[600px] flex items-center justify-center">
                <div className="absolute z-0">
                  <Sprite
                    images={currentAnimationSequence}
                    fps={24}
                    width={800}
                    height={800}
                    loop={false}
                    autoplay={true}
                    animationType={animationType}
                    onComplete={() => setIsAnimationComplete(true)}
                  />
                </div>
                <div className="absolute bottom-0 z-10 flex gap-4">
                  {step === 1 ? (
                    <>
                      <button
                        className="px-6 py-2 bg-white text-black font-bold rounded"
                        onClick={() => setStep(2)}
                      >
                        Dial
                      </button>
                      <button
                        className="px-3 py-2 bg-white text-black font-bold rounded"
                        onClick={() => setStep(2)}
                      >
                        <MoveRight size={20} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="px-3 py-2 bg-white text-black font-bold rounded flex items-center"
                        onClick={() => setStep(1)}
                      >
                        <MoveLeft className="mr-2" size={20} />
                      </button>
                      <button
                        disabled={loading}
                        className="px-6 py-2 bg-white text-black font-bold rounded"
                        onClick={handleFinish}
                      >
                        Finish
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Right - Scroller */}
              <div className="w-1/4 h-[400px] -mt-[46rem] flex items-center justify-center relative">
                <div className="absolute right-0 top-0 h-full flex items-center">
                  <InfiniteScroll
                    items={step === 1 ? materialItems : dialItems}
                    width="250px"
                    isTilted={true}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
