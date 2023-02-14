import { RatayoApi } from "./ApiQuery";


export const CartQuery = RatayoApi.injectEndpoints({
    endpoints:(builder)=>({
       GetCart:builder.mutation({
        query:(data)=>({
            url:"/cart",
            method:"GET",
        })
       }),
       PostCart:builder.mutation({
        query:(data)=>({
            url:"/cart",
            method:"PUT",
            body:data
        })
       })
    })
})

export const {useGetCartMutation,usePostCartMutation} = CartQuery;