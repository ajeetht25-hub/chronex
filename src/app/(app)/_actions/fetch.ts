"use server";

import { WatchRequest } from "@/payload-types";
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

export async function getWatchData() {
    const payload = await getPayloadUtil();
    const materialDocs = await payload.find({
        collection: 'watch-materials',
        pagination:false,
        limit: 100,
    })
    const dialDocs = await payload.find({
        collection:'watch-dials',
        pagination:false,
        limit:100
    })
    const imageDocs = await payload.findGlobal({
        slug:'watch-images',
    })
    return {
        materials:materialDocs.docs,
        dials:dialDocs.docs,
        images:imageDocs.images
    }
}

export async function customerSubmitAction(input:Omit<WatchRequest,'id' | 'createdAt' | 'updatedAt'>) {
    const payload = await getPayloadUtil();
    await payload.create({
        collection: 'watch-requests', 
        data: {
            ...input,
        }
    });
}