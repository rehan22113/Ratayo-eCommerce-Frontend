import { RatayoApi } from "./ApiQuery";

const ShopQuery = RatayoApi.injectEndpoints(
    {
        endpoints:(builder)=>({
            GetShopByID:builder.query({
                query:(id)=>`/shop?userid=${id}`
            })
            })
        
    })
export const {useGetShopByIDQuery} = ShopQuery