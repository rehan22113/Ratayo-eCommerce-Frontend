import { configureStore } from "@reduxjs/toolkit";
import Mobilemenu from './Slice/Mobilemenu'
import ProductAction from "./Slice/ProductAction";
import IsLogin from './Slice/Login'
import { RatayoApi } from "./Api/ApiQuery";
import tokenSlice from "./Slice/tokenSlice";
import RoleSlice from "./Slice/RoleSlice";

const store  = configureStore({
    reducer:{
        mobilemenu:Mobilemenu,
        productview:ProductAction,
        tokenSlice:tokenSlice,
        isLogin:IsLogin,
        RoleSlice:RoleSlice,
        [RatayoApi.reducerPath]:RatayoApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(RatayoApi.middleware)
})

export default store;