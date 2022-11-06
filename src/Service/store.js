import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Counter";
import Mobilemenu from './Slice/Mobilemenu'
import ProductAction from "./Slice/ProductAction";

const store  = configureStore({
    reducer:{
        counter:CounterSlice,
        mobilemenu:Mobilemenu,
        productview:ProductAction
        
    }
})

export default store;