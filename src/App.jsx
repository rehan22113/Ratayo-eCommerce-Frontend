import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import SingleProduct from './Pages/SingleProduct'
import ShoppingCart from './Pages/ShoppingCart'
import Checkout from './Pages/Checkout'
import ShopPage from './Pages/ShopPage'
import ErrorPage from './Pages/ErrorPage'

// vendor Pages
import VendorDashboard from './Pages/Vendor/Dashboard'
import VendorIndex from './Components/VendorComponent/Dashboard'
import VendorMain from './Components/VendorComponent/Dashboard/Main'
import AllVendorProducts from './Components/VendorComponent/Dashboard/AllVendorProducts'
import AddNewProduct from './Components/VendorComponent/Dashboard/AddNewProduct'
import ShopSettingGeneral from './Components/VendorComponent/Dashboard/ShopSettingGeneral'
import Orders from './Components/VendorComponent/Dashboard/Orders'
import PaymentSetting from './Components/VendorComponent/Dashboard/PaymentSetting'


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Checkout />} />

        <Route path='/dashboard/vendor' element={<VendorDashboard/>} >
          <Route index element={<VendorIndex />}/>
          <Route path='main' element={<VendorMain />}/>
          <Route path='products' element={<AllVendorProducts />}/>
          <Route path='addnewproduct' element={<AddNewProduct />} />
          <Route path='orders' element={<Orders />} />
          <Route path='shop-setting-general' element={<ShopSettingGeneral />} />
          <Route path='payment-setting' element={<PaymentSetting />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    
  )
}

export default App