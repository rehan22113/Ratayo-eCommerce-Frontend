import React,{useState,useEffect} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRefreshMutation } from '../Service/Api/ApiQuery'
import useAuth from '../Hooks/useAuth'
import { useSelector } from 'react-redux'
const PreventAfterLogin = () => {
    const UserRoles = useSelector(state=>state.RoleSlice)
    const [refresh,{}] = useRefreshMutation()
    const Navigate = useNavigate()
    const {RoleAction} = useAuth();
    const isLogin = async()=>{
      const {data} = await refresh()
      const Roles = await RoleAction();
      console.log("Roles prevetn",Roles)
      if(Roles){
        if(Roles.Admin){
          Navigate("/dashboard/admin")
        }
        else if(Roles.Vendor){
          Navigate("/dashboard/vendor")
        }
        else if(Roles.User){
          Navigate("/dashboard/customer")
        }
      }      
      }  
   
      useEffect(() => {
        
        isLogin()
      }, []);

      return <Outlet/>
}

export default PreventAfterLogin