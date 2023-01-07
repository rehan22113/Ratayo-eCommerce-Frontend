import React,{useEffect} from 'react'
import useAuth  from '../Hooks/useAuth';
import { Outlet, useNavigate } from 'react-router-dom';

const ConfigAuth = () => {
    const Navigate = useNavigate()
    const {roles,UserInfo} = useAuth();

    
    const isLogin = async()=>{

      console.log("Prevent Login",roles)
        if(roles.isVendor){
          Navigate("/dashboard/vendor")
        }
        else if(roles.isAdmin){
          Navigate("/dashboard/admin")
        }
        else if(roles.isUser){
          Navigate("/dashboard/customer")
        }       
      }  

      useEffect(() => {
        isLogin()
      }, [roles]);
  return (
    <>
    <Outlet />
    </>
  )
}

export default ConfigAuth