import React from 'react'
import {User,Admin,Vendor} from '../Slice/RoleSlice'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {logout, setToken} from '../Slice/tokenSlice'
import jwtDecode from 'jwt-decode'
import { UserInformation } from '../Slice/Login'
const baseQuery = fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_APP_URL}`,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().tokenSlice.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {

    let result = await baseQuery(args, api, extraOptions)

    // If you want, handle other status codes, too
    if (result?.error?.status === 403 || result?.error?.originalStatus === 403) {
        console.log('sending refresh token')

        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/refresh', api, extraOptions)

        if (refreshResult?.data) {
            console.log("Api query",refreshResult)
            // store the new token 
            api.dispatch(setToken({ ...refreshResult.data }))

            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {

            if (refreshResult?.error?.status === 403 || refreshResult?.error?.originalStatus === 403) {
                refreshResult.error.data.message = "Your login has expired."
            }
            return refreshResult
        }
    }

    return result
}

export const RatayoApi = createApi({
    reducerPath:"RatayoApi",
    baseQuery:baseQueryWithReauth,
    endpoints:(builder)=>({
        
        Login:builder.mutation({
            query:(data)=>({
                url:'/auth',
                method:"POST",
                body:data
            })
        }),
        Register:builder.mutation({
            query:(data)=>({
                url:'/register',
                method:"POST",
                body:data
            })
        }),
        Refresh:builder.mutation({
            query:()=>({
                url:'/refresh',
                method:'GET'
            }),
           async onQueryStarted(args,{dispatch,queryFulfilled}){
            try{
                const {data} = await queryFulfilled;
                console.log("query stated",data)
                if(data){
                    dispatch(setToken({accessToken:data.accessToken}))
                    const {UserInfo} = await jwtDecode(data.accessToken)
                    dispatch(UserInformation(UserInfo.id))
                }
            }catch(err){
                console.log("Error on refresh queryStarted",err)
            }                        
            }
        }),
        Logout:builder.mutation({
            query:()=>({
                url:'/logout',
                method:'GET'
            }),
            async onQueryStarted(args,{dispatch,queryFulfilled}){
                try {
                    const { data } = await queryFulfilled;
                    console.log("logoutme",data);
                    dispatch(logout());
                    dispatch(Vendor(false))
                    dispatch(User(false))
                    dispatch(Admin(false))
                } catch (err) {
                    console.log(err);
                }
            }
        })
    })
})

export const {useLoginMutation,useRegisterMutation,useRefreshMutation,useLogoutMutation} = RatayoApi;