import { createSlice } from "@reduxjs/toolkit";

const RoleSlice = createSlice({
    name:"RoleSlice",
    initialState:{
        isVendor:false,
        isUser:false,
        isAdmin:false
    },
    reducers:{
        Vendor:(state,action)=>{
            state.isVendor = action.payload
        },
        Admin:(state,action)=>{
            state.isAdmin = action.payload
        },
        User:(state,action)=>{
            state.isUser = action.payload
        }
    }
})

export const {Vendor,Admin,User} = RoleSlice.actions
export default RoleSlice.reducer
