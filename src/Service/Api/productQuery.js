import { RatayoApi } from "./ApiQuery";

export const ProductQuery = RatayoApi.injectEndpoints({
    endpoints:(builder)=>({
        GetProducts:builder.query({
            query:()=> `listing`
          }),
        GetVendorProducts:builder.query({
            query:(id)=> `listing?u=${id}`,
            }), 
        UploadProduct:builder.mutation({
            query:(data)=>({
                url:"/listing",
                method:"POST",
                body:data
            })
        }),
        AddVariant:builder.mutation({
            query:(data)=>({
                url:'/variant',
                method:"POST",
                body:data
            })
        }),

    })
})

export const {useGetProductsQuery,useGetVendorProductsQuery,useUploadProductMutation,useAddVariantMutation} = ProductQuery;