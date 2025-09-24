import { GlobalConfig } from "payload";

export const ShopLocations: GlobalConfig = {
  slug: "shopLocations",
  admin:{
    group:"Stores"
  },
  fields: [
    {
      name: "locations",
      type: "array",
      fields: [
        {
          name: "shopName",
          type: "text",
          required: true,
        },
        {
          name: "latitude",
          type: "number",
          required: true,
        },
        {
          name: "longitude",
          type: "number",
          required: true,
        },
      ],
    },
  ],
};
