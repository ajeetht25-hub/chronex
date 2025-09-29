"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import ScrollBtnSelector from "./ScrollBtnSelector";
import { ArrowRight, ArrowLeft } from "lucide-react";
// import Navbar from "../../_components/layout/Navbar";
import Image from "next/image";
import { WatchDial, WatchMaterial } from "@/payload-types";
import { useStore } from "../../_store/store";
import { WatchImage } from "@/payload-types";
import gsap from "gsap";
import { useCustomerStore } from "./(forms)/customer-store";
import { useCustomerSubmitQuery } from "./(forms)/customer-submit-query";
import CustomerForm from "./(forms)/CustomerForm";
import { SubmitDialog } from "./(forms)/submt-dialog";
import { toast } from "@/components/ui/sonner";

interface CustomizationProps {
  materials: WatchMaterial[];
  dials: WatchDial[];
  images: WatchImage["images"];
}

type ViewMode = "normal" | "zoomed" | "animation1" | "animation2";

const Customization = ({ materials, dials, images }: CustomizationProps) => {
  const [currentView, setCurrentView] = useState<"material" | "dial">(
    "material"
  );
  const { name, email, phone } = useCustomerStore();
  const { loading, submitQuery } = useCustomerSubmitQuery();
  const { color, material, dial, setMaterial, setDial, setColor } = useStore();
  const [submitDialog, setSubmitDialog] = useState(false);
  const [price, setPrice] = useState<number>(0);
  const [watchImage, setWatchImage] = useState<string>("");
  const [materialIndex, setMaterialIndex] = useState<number>(0);
  const [dialIndex, setDialIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<ViewMode>("normal");

  const normalViewRef = useRef<HTMLDivElement>(null);
  const zoomedViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (materials.length > 0 && dials.length > 0) {
      if (!material) {
        setMaterial(materials[0].name);
        setColor(materials[0].colorCode);
        setMaterialIndex(0);
      } else {
        const index = materials.findIndex((m) => m.name === material);
        if (index !== -1) setMaterialIndex(index);
      }

      if (!dial) {
        setDial(dials[0].name);
        setDialIndex(0);
      } else {
        const index = dials.findIndex((d) => d.name === dial);
        if (index !== -1) setDialIndex(index);
      }

      if (images && images.length > 0) {
        const defaultMaterialName = !material ? materials[0].name : material;
        const defaultDialName = !dial ? dials[0].name : dial;

        const defaultImage = images.find((img) => {
          const imgMaterial =
            typeof img.material === "object" ? img.material.name : null;
          const imgDial = typeof img.dial === "object" ? img.dial.name : null;
          return (
            imgMaterial === defaultMaterialName && imgDial === defaultDialName
          );
        });

        if (
          defaultImage &&
          typeof defaultImage.image === "object" &&
          defaultImage.image.url
        ) {
          setWatchImage(defaultImage.image.url);
        }
      }
    }
  }, [
    materials,
    dials,
    images,
    material,
    dial,
    setMaterial,
    setDial,
    setColor,
  ]);

  const handleSubmit = async () => {
    try {
      if (!dial || !material) {
        toast.error("Please select a dial and a material");
        return;
      }
      await submitQuery({
        customerDetails: {
          name,
          email,
          phone,
        },
        watchDial: dials.find((d) => d.name === dial)!.id,
        watchMaterial: materials.find((m) => m.name === material)!.id,
      });
      toast.success("We received your query. We will get back to you soon.");
      setSubmitDialog(true);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    let totalPrice = 0;
    const selectedMaterial = materials.find((m) => m.name === material);
    if (selectedMaterial) {
      totalPrice += selectedMaterial.price || 0;
    }
    const selectedDial = dials.find((d) => d.name === dial);
    if (selectedDial) {
      totalPrice += selectedDial.price || 0;
    }

    setPrice(totalPrice);
  }, [material, dial, materials, dials]);

  useEffect(() => {
    if (!material || !dial || !images || images.length === 0) return;

    const matchingImage = images.find((img) => {
      const imgMaterial =
        typeof img.material === "object" ? img.material.name : null;
      const imgDial = typeof img.dial === "object" ? img.dial.name : null;
      return imgMaterial === material && imgDial === dial;
    });

    if (
      matchingImage &&
      typeof matchingImage.image === "object" &&
      matchingImage.image.url
    ) {
      setWatchImage(matchingImage.image.url);
    }
  }, [material, dial, images]);

  useEffect(() => {
    if (viewMode === "normal" && normalViewRef.current) {
      if (zoomedViewRef.current) {
        gsap.to(zoomedViewRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          onComplete: () => {
            if (zoomedViewRef.current) {
              zoomedViewRef.current.style.display = "none";
            }
          },
        });
      }

      normalViewRef.current.style.display = "block";
      gsap.fromTo(
        normalViewRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 }
      );
    } else if (viewMode === "zoomed" && zoomedViewRef.current) {
      if (normalViewRef.current) {
        gsap.to(normalViewRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          onComplete: () => {
            if (normalViewRef.current) {
              normalViewRef.current.style.display = "none";
            }
          },
        });
      }

      zoomedViewRef.current.style.display = "block";
      gsap.fromTo(
        zoomedViewRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1.2, y: -20, duration: 0.5 }
      );
    }
  }, [viewMode]);

  const handleMaterialSelection = (index: number) => {
    setMaterialIndex(index);
    setMaterial(materials[index].name);
    setColor(materials[index].colorCode);
  };

  const handleDialSelection = (index: number) => {
    setDialIndex(index);
    setDial(dials[index].name);
  };

  const handleViewChange = (view: "material" | "dial") => {
    setCurrentView(view);
    if (
      view === "material" &&
      materialIndex >= 0 &&
      materialIndex < materials.length
    ) {
      setColor(materials[materialIndex].colorCode);
    }
  };

  const toggleViewMode = (mode: ViewMode) => {
    setViewMode(mode);
  };

  return (
    <section
      style={{
        background: `linear-gradient(90deg, #000000 0%, ${color || "#5c4f3a"} 100%)`,
      }}
      className="min-h-screen px-4 lg:px-0"
    >
      {" "}
      <div className="xl:container xl:mx-auto relative">
        <CustomerForm />
        <SubmitDialog open={submitDialog} onOpenChange={setSubmitDialog} />
        {/* <Navbar isFixed={true} /> */}
        <div className="flex flex-col items-center justify-between py-10 gap-5 lg:px-12">
          <p className="text-center text-5xl font-bold text-white">
            Watch Name
          </p>
          <div className="lg:flex lg:flex-row gap-3 items-center justify-center lg:h-[30rem] w-full">
            {/* Mobile */}
            <div className="lg:hidden lg:basis-1/3 h-full order-1 relative lg:order-2">
              <div
                ref={normalViewRef}
                className={`relative  lg:w-full h-[28rem] ${viewMode === "zoomed" ? "scale-150" : ""}`}
                style={{ display: viewMode === "normal" ? "block" : "none" }}
              >
                {watchImage && (
                  <Image
                    src={watchImage}
                    alt="watch"
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              <div
                ref={zoomedViewRef}
                className={`relative w-full animate-in transition-all h-[32rem] z-10 scale-110 lg:scale-100 ${viewMode === "zoomed" ? "block" : "none"}`}
                style={{ display: viewMode === "zoomed" ? "block" : "none" }}
              >
                {watchImage && (
                  <Image
                    src={watchImage}
                    alt="watch zoomed"
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
              {viewMode === "animation1" || viewMode === "animation2" ? (
                <div className="h-[28rem] w-full"></div>
              ) : null}
            </div>
            <div className="lg:basis-1/3 order-2 lg:order-1">
              <p className="font-bold text-white lg:text-7xl  text-4xl">
                Choose your own {currentView}
              </p>
              <hr className="w-1/4 lg:w-1/3  lg:mt-2 h-0.5 bg-white" />
              <div className="py-4 flex items-center justify-center lg:justify-start gap-5 z-20 relative">
                <div
                  className={`relative h-16 w-16 rounded-full cursor-pointer border-2 ${viewMode === "normal" ? "border-yellow-400" : "border-white"}`}
                  onClick={() => toggleViewMode("normal")}
                >
                  {watchImage && (
                    <Image
                      src={watchImage}
                      alt="watch"
                      fill
                      className="object-contain overflow-hidden"
                    />
                  )}
                </div>
                <div
                  className={`relative h-16 w-16 rounded-full cursor-pointer border-2 ${viewMode === "zoomed" ? "border-yellow-400" : "border-white"}`}
                  onClick={() => toggleViewMode("zoomed")}
                >
                  {watchImage && (
                    <Image
                      src={watchImage}
                      alt="watch"
                      fill
                      className="object-contain overflow-hidden"
                    />
                  )}
                </div>
                <div
                  onClick={() => toggleViewMode("animation1")}
                  className={`relative hidden lg:block h-16 w-16 rounded-full cursor-pointer border-2 border-white ${viewMode === "animation1" ? "border-yellow-400" : "border-white"}`}
                >
                  <Image
                    src={"/img/watches/animation-1.png"}
                    alt="watch"
                    fill
                    className="object-contain overflow-hidden"
                  />
                </div>
                <div
                  onClick={() => toggleViewMode("animation2")}
                  className={`relative hidden lg:block h-16 w-16 rounded-full cursor-pointer border-2 border-white ${viewMode === "animation2" ? "border-yellow-400" : "border-white"}`}
                >
                  <Image
                    src={"/img/watches/animation-2.png"}
                    alt="watch"
                    fill
                    className="object-contain overflow-hidden"
                  />
                </div>
              </div>
              <div className="text-white py-3 hidden lg:block">
                <p className="text-3xl font-bold">Price:</p>
                <p className="text-3xl font-bold">₹ {price.toLocaleString()}</p>
              </div>
            </div>
            <div className="hidden lg:block lg:basis-1/3 h-full order-1 relative lg:order-2">
              <div
                ref={normalViewRef}
                className="relative w-[90%] lg:w-full h-[28rem]"
                style={{ display: viewMode === "normal" ? "block" : "none" }}
              >
                {watchImage && (
                  <Image
                    src={watchImage}
                    alt="watch"
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              <div
                ref={zoomedViewRef}
                className="relative w-full lg:h-[28rem] z-10"
                style={{ display: viewMode === "zoomed" ? "block" : "none" }}
              >
                {watchImage && (
                  <Image
                    src={watchImage}
                    alt="watch zoomed"
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
            </div>
            <div className="lg:basis-1/3 order-3">
              {currentView === "material" ? (
                <ScrollBtnSelector
                  items={materials}
                  type="material"
                  initialSelected={materialIndex}
                  onSelect={handleMaterialSelection}
                />
              ) : (
                <ScrollBtnSelector
                  items={dials}
                  type="dial"
                  initialSelected={dialIndex}
                  onSelect={handleDialSelection}
                />
              )}
            </div>
          </div>
          {viewMode === "animation1" && (
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/img/watches/animation-1.png"
                  alt="watch"
                  className="animate-in"
                  style={{
                    animation: "watch-skew 1s ease-in-out",
                  }}
                  width={700}
                  height={700}
                />
              </div>
              <style jsx>{`
                @keyframes watch-skew {
                  0% {
                    transform: translateX(100px) skew(10deg, 0deg);
                    opacity: 0;
                  }
                  100% {
                    transform: translateX(0) skew(0deg, 0deg);
                    opacity: 1;
                  }
                }
              `}</style>
            </div>
          )}

          {viewMode === "animation2" && (
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/img/watches/animation-2.png"
                  alt="watch"
                  className="animate-in"
                  style={{
                    animation: "watch-skew 1s ease-in-out",
                  }}
                  width={700}
                  height={700}
                />
              </div>
              <style jsx>{`
                @keyframes watch-skew {
                  0% {
                    transform: translateX(-100px) skew(10deg, 0deg);
                    opacity: 0;
                  }
                  100% {
                    transform: translateX(0) skew(0deg, 0deg);
                    opacity: 1;
                  }
                }
              `}</style>
            </div>
          )}

          <div className="w-full lg:w-auto">
            <div className="flex px-4 lg:px-0 items-center justify-between lg:justify-between gap-4 relative z-20">
              <div className="text-white py-3 block lg:hidden">
                <p className="text-xl font-bold">Price:</p>
                <p className="text-xl font-bold">₹ {price.toLocaleString()}</p>
              </div>
              {currentView === "material" ? (
                <>
                  <Button
                    className="bg-white relative rounded-md text-lg text-black py-3 px-8 hover:bg-white hover:text-black cursor-pointer"
                    onClick={() => handleViewChange("dial")}
                  >
                    Dial
                  </Button>
                  <Button
                    onClick={() => handleViewChange("dial")}
                    className="bg-white hidden lg:block rounded-md text-lg text-black py-3 px-8 hover:bg-white hover:text-black cursor-pointer"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </>
              ) : (
                <div className="flex gap-5">
                  <Button
                    className="bg-white rounded-md text-lg text-black py-3 px-8 hover:bg-white hover:text-black cursor-pointer"
                    onClick={() => handleViewChange("material")}
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-white rounded-md text-lg text-black py-3 px-8 hover:bg-white hover:text-black cursor-pointer"
                  >
                    {loading ? "Loading..." : "Finish"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
