import { RatayoApi } from "./ApiQuery";

const ProductEndpoint = RatayoApi.injectEndpoints({
    endpoints:(builder)=>({
        GetProducts:builder.query({
            query:()=> `listing`
          }),
        GetVendorProducts:builder.query({
            query:(id)=> `listing?u=${id}`,
            }), 
        UploadProduct:builder.mutation({
            query:(data)=>({
                URL:"/listing",
                method:"POST",
                body:data
            })
        }),
        AddVariant:builder.mutation({
            query:(data)=>({
                URL:"/variant",
                method:"POST",
                body:data
            })
        })

    })
})

export const {useGetProductsQuery,useGetVendorProductsQuery,useUploadProductMutation,useAddVariantMutation} = ProductEndpoint;