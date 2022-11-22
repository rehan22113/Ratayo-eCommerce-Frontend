import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Counter";
import Mobilemenu from './Slice/Mobilemenu'
import ProductAction from "./Slice/ProductAction";
import IsLogin from './Slice/Login'

const store  = configureStore({
    reducer:{
        counter:CounterSlice,
        mobilemenu:Mobilemenu,
        productview:ProductAction,
        isLogin:IsLogin
    }
})

export default store;