import React from "react";
import Image from "next/image";

interface HeroCardProps {
  videoUrl?: string;
  imageUrl?: string;
  title: string;
  description: string;
}

const HeroCard = ({
  videoUrl,
  imageUrl,
  title,
  description,
}: HeroCardProps) => {
  return (
    <div className="relative w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[80vh] object-cover rounded-lg"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {imageUrl && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={imageUrl}
            alt="hero image"
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center">
        <div className="px-8 md:px-16 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
