import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name:"tokenslice",
    initialState:{
        token:null
    },
    reducers:{
        setToken:(state,action)=>{
            state.token=action.payload.accessToken
        },
        logout:(state,action)=>{
            state.token = null
        }
    }
})

export const {setToken,logout} = tokenSlice.actions
export default tokenSlice.reducer