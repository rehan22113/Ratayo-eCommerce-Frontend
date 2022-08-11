import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Counter";
import Mobilemenu from './Slice/Mobilemenu'

const store  = configureStore({
    reducer:{
        counter:CounterSlice,
        mobilemenu:Mobilemenu
    }
})

export default store;