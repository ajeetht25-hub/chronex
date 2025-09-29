"use client";
import React from "react";
import ProductHero from "./_components/sections/ProductHero";
import Customizing from "./_components/sections/Customizing";
import ShopMap from "./_components/sections/ShopMap";
import { fetchLocation } from "../_actions/fetch";
import Section2 from "./_components/sections/Section2";

const Page = async () => {
  const fetchLocations = await fetchLocation();
  return (
    <>
      <ProductHero />
      <Section2 />
      <Section2 />
      <Customizing />
      <ShopMap shopPlaces={fetchLocations} />
    </>
  );
};

export default Page;

export const dynamic = "force-dynamic";
