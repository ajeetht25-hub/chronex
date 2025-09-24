import type { CollectionConfig, NumberFieldSingleValidation, TextFieldSingleValidation } from "payload";

export const WatchDials: CollectionConfig = {
    slug: 'watch-dials',
    admin: {
        useAsTitle: 'name',
        group: "Watches",
    },
    fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'colorCode',
          type: 'text',
          required: true,
          validate:((value:string)=>{
            if(!value.startsWith("#")){
              return "Color code must start with #";
            }
            if(value.length !== 7){
              return "Color code must be 7 characters long";
            }
            return true;
          }) as TextFieldSingleValidation
        },
        {
          name: 'price',
          type: 'number',
          required:true,
          validate:((value:number)=>{
            if(value < 0){
              return "Price must be greater than 0";
            }
            return true;
          }) as NumberFieldSingleValidation

        }
      ],
}