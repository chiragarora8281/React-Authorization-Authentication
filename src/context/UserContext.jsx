import { createContext, useContext, useEffect, useReducer } from "react";
import userReducer from "../reducer/userReducer/UserReducer";
import {USER_API_INSTANCE} from '../axiosInstances/UserAxiosInstance'

export const UserContextApi = createContext();

const initialState ={
    user: null,
    isLoading: true,
    singleUser: null,
}

const UserProvider = ({children}) =>{
    let [users , dispatch] = useReducer(userReducer , initialState);
    
    let fetchUsers = async()=>{
        try{
            let {data} = await USER_API_INSTANCE.get(`/users`)
            console.log(data);
            dispatch({type: 'FETCH', users: data })                                                            
        }catch(error){
            console.log(error)
        }
    }
    const fetchSingleUser = async (id)=> {
        try{
            let {data} = await USER_API_INSTANCE.get(`/users/${id}`);
            dispatch({type:'SINGLE_USER', singleUser : data})                                                         
        }catch(error){
            console.log(error)
        }
    }

    return <UserContextApi.Provider value={{users,fetchUsers,fetchSingleUser}}>{children}</UserContextApi.Provider>
}











export default UserProvider;
//custom Hook
export let useAllUsers = ()=>{
    const {users, fetchUsers} = useContext(UserContextApi);
    useEffect(()=>{
        fetchUsers();
    },[])
    return users;


}