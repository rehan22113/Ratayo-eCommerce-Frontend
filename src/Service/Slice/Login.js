import { createSlice } from "@reduxjs/toolkit";

const IsLogin = createSlice({
    name:"user/login",
    initialState:{
        isLogin:false,
        VendorLogin:false,
        userID:""
    },
    reducers:{
        LoginUser:(state,action)=>{
            state.isLogin = action.payload
        },
        LoginVendor:(state,action)=>{
            state.VendorLogin = action.payload
        },
        UserInformation:(state,action)=>{
            state.userID =action.payload
        }
    }
})


export default IsLogin.reducer
export const {LoginUser,LoginVendor,UserInformation} = IsLogin.actions