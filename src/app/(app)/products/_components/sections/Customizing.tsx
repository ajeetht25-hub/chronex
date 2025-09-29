import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Customizing = () => {
  return (
    <>
      <div className="flex flex-col gap-16 container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row gap-0">
          <Image src="/img/watch-img.png" alt={""} width={900} height={900} />
          <div className="flex flex-col gap-3 lg:max-w-3/4 lg:justify-center text-right px-2">
            <h1 className="text-6xl font-bold text-white">
              Crafting luxurious watches
            </h1>
            <p className="text-xl text-white">
              Personalize your timepiece with Vasuki, where craftsmanship meets
              individuality. Customize every detail to reflect your unique style
              and sophistication.
            </p>
            <div>
              <Button
                asChild
                className="text-black  hover:bg-grey-500 bg-white px-5 py-2 rounded-lg hover:bg-none"
              >
                <Link href="/customer">Start Customizing!</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between px-3">
          <h1 className="text-white text-6xl font-bold">
            Explore the vasuki collection
          </h1>
          <div className="flex flex-col gap-2 lg:max-w-1/2">
            <p className="text-white text-xl lg:text-3xl">
              The Vasuki collection offers a wide range of prestigious,
              high-precision timepieces, from Professional to Classic models to
              suit any wrist.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customizing;
