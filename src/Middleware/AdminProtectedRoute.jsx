import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'
import { useRefreshMutation } from '../Service/Api/ApiQuery';
import useAuth from '../Hooks/useAuth';
const AdminProtectedRoute = () => {
  const {RoleAction} = useAuth()
  const [refresh,{}]= useRefreshMutation();
  const token = useSelector((state)=>state.tokenSlice.token)
  const Navigate = useNavigate();
  const Refresh=async()=>{
    await refresh()
    const Roles=await RoleAction();
    console.log("Vendor ",Roles);

    if(!token && !Roles.Admin){
      console.log("roles",Roles)
      Navigate('/login')
      console.log("Invalid User")
    }
   
}
useEffect(()=>{
  
  Refresh()
},[])
  return (
    <Outlet/>
  )
}

export default AdminProtectedRoute
