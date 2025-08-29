import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WhyUsCardProps {
  icon: string;
  title: string;
  desc: string;
  link: string;
}

const WhyUsCard = ({ icon, title, desc, link }: WhyUsCardProps) => {
  return (
    <div className="relative w-fit h-[23rem] rounded-tl-[2rem] rounded-b-[2rem] rounded-tr-[7rem] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-white to-cyan-400 animate-gradient bg-[length:200%_100%]"></div>

      <div className="relative h-full w-full px-7 py-8 flex flex-col gap-5 justify-between">
        <div className="absolute transform rotate-45 bg-black w-32 h-7 top-4 -right-8"></div>

        <div className="bg-[#4DC6E2] flex justify-center items-center h-14 w-14 rounded-lg">
          <div className="relative w-8 h-8">
            <Image
              src={icon}
              alt={`${title} icon`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-medium text-3xl">{title}</p>
          <p className="text-lg lg:text-xl">{desc}</p>
        </div>

        <Link
          href={link}
          aria-label={`Explore more about ${title}`}
          className="flex items-center gap-2 cursor-pointer"
        >
          <p className="text-xl">Explore More</p>
          <div className="relative w-7 h-7">
            <Image
              src={"/icons/arrow-right-1.svg"}
              alt="icon"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WhyUsCard;
