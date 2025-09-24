import React from "react";
import Hero from "./_components/sections/Hero";
import KnowMore from "./_components/sections/KnowMore";
import Videos from "./_components/sections/Videos";
import WhyUs from "./_components/sections/WhyUs";
import FAQ from "./_components/sections/FAQ";

const Page = () => {
  return (
    <div>
      <Hero />
      <KnowMore />
      <Videos />
      <WhyUs />
      <FAQ />
    </div>
  );
};

export default Page;
