import { useContext, useEffect } from "react"
import { UserContextApi } from "../context/UserContext"


const useFetchUser = ()=>{

    let {users , fetchUsers, fetchSingleUser}= useContext(UserContextApi)
    useEffect(()=>{
        fetchUsers();
    },[])
    let data = {users,fetchSingleUser,fetchSingleUser}
    return data;
}
export default useFetchUser;