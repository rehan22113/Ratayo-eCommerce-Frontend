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
import RefreshToken from './Middleware/RefreshToken'
//Admin pages
import AdminDashboard from './Pages/Admin/Dashboard'
import AdminLogin from './Pages/Admin/loginPage'
import Categories from './Components/AdminComponent/Categories'
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
import PaymentPage from './Pages/PaymentPage'
// import OrderDetail from './Components/VendorComponent/Dashboard/OrderDetail'
import OrderSummary from './Pages/OrderSummary'
import AdminProtectedRoute from './Middleware/AdminProtectedRoute'

const App = () => {
  return (
    <>
    {/* Unprotected Routes */}
      <Routes >
       <Route element={<RefreshToken/>} >
        <Route path='/payment' element={<PaymentPage />}/>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-detail' element={<OrderSummary/>} />      
       </Route> 

    {/* Prevent After Routes */}
        <Route element={<PreventAfterLogin/>}>         
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage />}/>
            <Route path='/adminlogin' element={<AdminLogin />} />         
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

    <Route element={<AdminProtectedRoute/>}>
      <Route path='/admin/ratayo/dashboard' element={<AdminDashboard />} > 
        <Route path='categories' element={<Categories/>} />
      </Route>
    </Route>


        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App