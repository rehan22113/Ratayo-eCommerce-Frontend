import { RatayoApi } from "./ApiQuery";

const ShopQuery = RatayoApi.injectEndpoints(
    {
        endpoints:(builder)=>({
            GetShopByID:builder.query({
                query:(id)=>`/shop?userId=${id}`
            }),
            GetShopByURL:builder.query({
                query:(id)=>`/shop/${id}`
            }),
            AddShop:builder.mutation({
                query:(data)=>({
                    url:'/shop',
                    method:"POST",  
                    body:data,
                })
            })
            })
        
    })
export const {useGetShopByIDQuery,useAddShopMutation} = ShopQuery