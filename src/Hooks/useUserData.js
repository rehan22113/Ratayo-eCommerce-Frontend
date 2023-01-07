import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux"
import { useRefreshMutation } from "../Service/Api/ApiQuery";
import {setToken} from "../Service/Slice/tokenSlice";


const useUserData =async()=>{

    
    const token = useSelector(state=>state.tokenSlice.token)

        const {UserInfo} = jwtDecode(token)
        return UserInfo
    
}

export default useUserData;
