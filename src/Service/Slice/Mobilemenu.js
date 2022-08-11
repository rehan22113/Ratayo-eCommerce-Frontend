import { createSlice } from "@reduxjs/toolkit";

const MobileMenu = createSlice({
    name:"mobilemenu",
    initialState:{
        value:false
    },
    reducers:{
        trigger:(state,action)=>{
            state.value = action.payload
        }
    }
})

export const {trigger} = MobileMenu.actions
export default MobileMenu.reducer