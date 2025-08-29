import type { CollectionConfig, NumberFieldSingleValidation, TextFieldSingleValidation } from "payload";
export const WatchMaterials: CollectionConfig = {
  slug: "watch-materials",
  admin: {
    useAsTitle: "name",
    group: "Watches",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required:true,
      validate:((value:number)=>{
        if(value < 0){
          return "Price must be greater than 0";
        }
        return true;
      }) as NumberFieldSingleValidation
    },
    {
      name:"colorCode",
      type:"text",
      required:true,
      validate:((value:string)=>{
        if(!value.startsWith("#")){
          return "Color code must start with #" as string;
        }
        if(value.length !== 7){
          return "Color code must be 7 characters long" as string;
        }
        return true;
      }) as TextFieldSingleValidation
    }
  ],
};
