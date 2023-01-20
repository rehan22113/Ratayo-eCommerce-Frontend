import React from 'react'
import {Routes,Route, Outlet } from 'react-router-dom'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import SingleProduct from './Pages/SingleProduct'
import ShoppingCart from './Pages/ShoppingCart'
import Checkout from './Pages/Checkout'
import ShopPage from './Pages/ShopPage'
import ErrorPage from './Pages/ErrorPage'
import PreventAfterLogin from './Middleware/PreventAfterLogin'
// vendor Pages
import VendorDashboard from './Pages/Vendor/Dashboard'
import VendorIndex from './Components/VendorComponent/Dashboard'
import VendorMain from './Components/VendorComponent/Dashboard/Main'
import AllVendorProducts from './Components/VendorComponent/Dashboard/AllVendorProducts'
import AddNewProduct from './Components/VendorComponent/Dashboard/AddNewProduct'
import ShopSettingGeneral from './Components/VendorComponent/Dashboard/ShopSettingGeneral'
import Orders from './Components/VendorComponent/Dashboard/Orders'
import PaymentSetting from './Components/VendorComponent/Dashboard/PaymentSetting'
import VendorProtectedRoute from './Middleware/VendorProtectedRoute'
//customer Pages
import CustomerDashboard from './Pages/Customer/Dashboard'
import CustomerProtectedRoute from './Middleware/CustomerProtectedRoute'

const App = () => {
  return (
    <>
    {/* Unprotected Routes */}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Checkout />} />
      

    {/* Prevent After Routes */}
        <Route element={<PreventAfterLogin/>}>
          
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage />}/>
            
        </Route>
      

    {/* Protected Routes */}
    <Route element={<VendorProtectedRoute />}>
        <Route path='/dashboard/vendor' element={<VendorDashboard/>} >
          <Route index element={<VendorIndex />}/>
          <Route path='main' element={<VendorMain />}/>
          <Route path='products' element={<AllVendorProducts />}/>
          <Route path='addnewproduct' element={<AddNewProduct />} />
          <Route path='orders' element={<Orders />} />
          <Route path='shop-setting-general' element={<ShopSettingGeneral />} />
          <Route path='payment-setting' element={<PaymentSetting />} />
        </Route>
    </Route>

    <Route element={<CustomerProtectedRoute />}>
        <Route path='/dashboard/customer' element={<CustomerDashboard/>} >
          
        </Route>
    </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App