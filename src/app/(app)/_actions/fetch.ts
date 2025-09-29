"use server";

import configPromise from "@/payload.config";
import { getPayload } from "payload";
import { cache } from "react";

export const getPayloadUtil = cache(async () => {
  return await getPayload({
    config: configPromise,
  });
});

export const submitForm = async (
  name: string,
  email: string,
  message: string
) => {
  const payload = await getPayloadUtil();
  await payload.create({
    collection: "contact",
    data: {
      name,
      email,
      message,
    },
  });
};

export const fetchLocation = async () => {
    const payload = await getPayloadUtil()
    const locations = await payload.findGlobal({
        slug: 'shopLocations',
        depth: 3,
    });

    return locations.locations;
}