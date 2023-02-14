import { RatayoApi } from "./ApiQuery";


export const UserQuery = RatayoApi.injectEndpoints({
    endpoints:(builder)=>({
       GetSingleUser:builder.query({
            query:(id)=>`/user?u=${id}`
       }),
       DeleteUser:builder.mutation({
            query:(id)=>({
                url:`/user/${id}`
            })
       }),       
    })
})

export const {useGetSingleUserQuery} = UserQuery;