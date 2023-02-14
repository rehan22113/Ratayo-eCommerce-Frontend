import { RatayoApi } from "./ApiQuery";

export const ProductQuery = RatayoApi.injectEndpoints({
    endpoints:(builder)=>({
        GetProducts:builder.query({
            query:()=> `listing`
          }),
        GetProductByCategory:builder.query({
            query:(id)=>`/listing?categoryId=${id}`
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
        DeleteProduct:builder.mutation({
            query:(id)=>({
                url:`/listing/${id}`,
                method:"DELETE",
                body:{
                    delete:true
                }
            })
        })

    })
})

export const {useGetProductsQuery,useGetVendorProductsQuery,useUploadProductMutation,useDeleteProductMutation,useGetProductByCategoryQuery} = ProductQuery;