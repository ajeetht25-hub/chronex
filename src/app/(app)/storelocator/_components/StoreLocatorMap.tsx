"use client";

import React from "react";
import GmapsLocationPicker from "../../_components/StoreLocator";
import { ShopLocation } from "@/payload-types";
import { env } from "@/env";

export default function StoreLocatorMap({
  shopPlaces,
}: {
  shopPlaces: ShopLocation["locations"];
}) {
  const [place, setPlace] =
    React.useState<google.maps.places.PlaceResult | null>(null);

  return (
    <GmapsLocationPicker
      apiKey={env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      place={place}
      setPlace={setPlace}
      shopPlaces={shopPlaces}
      inputClassName="border-[1px] border-black p-2 bg-white rounded-md lg:w-72 mt-4 ml-4 w-60"
    />
  );
}
