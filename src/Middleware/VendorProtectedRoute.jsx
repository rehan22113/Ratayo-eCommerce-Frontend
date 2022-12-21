import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth';
import { useRefreshMutation } from '../Service/Api/ApiQuery';

const VendorProtectedRoute = () => {

  const [refresh,{}]= useRefreshMutation();
  const  {RoleAction} = useAuth()
  const token = useSelector((state)=>state.tokenSlice.token)
  const Navigate = useNavigate();
  const Refresh=async()=>{
    await refresh()
    const Roles=await RoleAction();
    console.log("Vendor ",Roles);

    if(!token && !Roles.Vendor){
      console.log("roles")
      Navigate('/login')
      console.log("Invalid User")
    }


    
}
useEffect(()=>{
  (async()=>{refresh();})()
  Refresh()
},[])
  return (
    <Outlet/>
  )
}

export default VendorProtectedRoute
