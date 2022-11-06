import { createSlice } from "@reduxjs/toolkit";

const ProductAction = createSlice({
    name:"productview",
    initialState:{
        value:false
    },
    reducers:{
        isOpen:(state,action)=>{
            state.value = action.payload
        }
    },
    
})

export const {isOpen} = ProductAction.actions
export default ProductAction.reducer
