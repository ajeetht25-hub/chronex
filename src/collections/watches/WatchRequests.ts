import type { CollectionConfig } from "payload";

export const WatchRequests: CollectionConfig = {
  slug: "watch-requests",
  admin: {
    group: "Customers",
  },
  access:{
    create: () => false,
    read: () => true,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      type:'group',
      name:'customerDetails',
      fields:[
        {
          name:'name',
          type:'text',
          required:true,
        },
        {
          name:'email',
          type:'text',
          required:true,
        },
        {
          name:'phone',
          type:'text',
          required:true,
        },
      ]
    },
    {
      name:"watchMaterial",
      type:"relationship",
      relationTo:"watch-materials",
      required:true,
    },{
      name:'watchDial',
      type:'relationship',
      relationTo:'watch-dials',
      required:true,
    },
    
  ],
};
