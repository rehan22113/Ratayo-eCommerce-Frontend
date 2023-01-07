import { RatayoApi } from "./ApiQuery";


const UserQuery = RatayoApi.injectEndpoints({
    endpoints:(builder)=>({
       GetSingleUser:builder.query({
            query:(id)=>`/user?u=${id}`
       }) 
    })
})

export const {useGetSingleUserQuery} = UserQuery;