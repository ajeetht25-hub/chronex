import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  
  upload: {
    crop:true,
    imageSizes:[{
      name:'watch',
      fit:'cover',
      width:370,
      height:720,
      // transparent bg
      background:{
        alpha:0,
        r:255,
        g:255,
        b:255
      },
      withoutEnlargement:false,

    }]
  },
}
