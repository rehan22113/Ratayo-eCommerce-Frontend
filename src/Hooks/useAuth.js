import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ROLES} from '../config/roleList'
import jwt from 'jwt-decode'
import { useRefreshMutation } from '../Service/Api/ApiQuery'

const useAuth =()=>{

    
    const [tokens,{}]= useRefreshMutation()
    const RoleAction=async()=>{
       
        let  Admin=false
        let Vendor=false
        let User=false
        
        const {data} = await tokens()
        console.log("Auth",data?.accessToken);

    if(data){
            
        const {UserInfo} = jwt(data.accessToken)
        if(UserInfo.roles.includes(ROLES.Admin)){
           Admin= true
           User = true

        }
        if(UserInfo.roles.includes(ROLES.Vendor)){
            User = true
            Vendor = true
           
        }
        if(UserInfo.roles.includes(ROLES.User)){
           User = true
            
        }
   
        return {Admin,Vendor,User,UserInfo}
    }
    else
        return false
    }
    return {RoleAction}
    
    
}

export default useAuth