import { CollectionConfig } from "payload";

export const Contact: CollectionConfig = {
  slug: "contact",
  admin:{
    group:"Contact",
    useAsTitle:"name",
    hideAPIURL:true
  },
  access:{
    read: () => true,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name:"name",
      type:"text",
      required:true
    },
    {
      name:"email",
      type:"email",
      required:true
    },
    {
      name:"message",
      type:"textarea",
      required:true
    }
  ],
};
