import { createSlice } from "@reduxjs/toolkit";

const IsLogin = createSlice({
    name:"user/login",
    initialState:{
        isLogin:false
    },
    reducers:{
        LoginUser:(state,action)=>{
            state.isLogin = action.payload
        }
    }
})


export default IsLogin.reducer
export const {LoginUser} = IsLogin.actions