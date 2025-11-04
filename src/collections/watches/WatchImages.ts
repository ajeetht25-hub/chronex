import type { GlobalConfig } from "payload";
export const WatchImages: GlobalConfig = {
    slug: "watch-images",
    admin: {
        group: "Watches",
        
    },
    hooks:{
        beforeValidate:[async ({data,req})=>{
            const allMaterials = await req.payload.find({
                collection:'watch-materials',
                pagination:false,
                limit:1000
            })
            const allDials = await req.payload.find({
                collection:'watch-dials',
                pagination:false,
                limit:1000
            })
            const totalCombinations = allMaterials.docs.length * allDials.docs.length;
            const uniqueCombinations = new Set(data.images.map((image:any)=>{
                return `${image.material.id}-${image.dial.id}`
            }))
            console.log(uniqueCombinations);
            console.log(data.images.length);
            console.log(totalCombinations);
            
            return data
        }]
    },
    fields: [
       {
        type:'array',
        name:'images',
        required:true,
        fields:[
            {
                type:'row',
                fields:[
                    {
                        name:'material',
                        type:'relationship',
                        relationTo:'watch-materials',
                        required:true,
                    },{
                        name:'dial',
                        type:'relationship',
                        relationTo:'watch-dials',
                        required:true,
                    }
                ]
            }
            ,{
                name:'image',
                type:'upload',
                relationTo:'media',
                required:true,
            }
        ]
       }
    ],
};
    
