import React, { createContext, useEffect, useReducer } from 'react'
import AuthInstance from '../axiosInstances/AuthInstance'
import authReducer from '../reducer/authReducer/AuthReducer';

export const AuthContextApi = createContext(); 

const initialState = {
    payload: null,
    profile : null,
    isLoading: true,
}

const AuthProvider = ({children}) => {

    let [auth, dispatch] = useReducer(authReducer, initialState);

    const signup = async payload =>{
        let {data} = await AuthInstance.post('/users', payload)
        dispatch({type: 'SIGNUP', payload:data})
    }

    let login = async payload =>{
        let {data} = await AuthInstance.post('/auth/login', payload);
        window.localStorage.setItem("TOKEN", JSON.stringify(data))
        dispatch({type: 'LOGIN', payload:data})
}

    let fetchAccessToken  = ()=>{
        let token = window.localStorage.getItem("TOKEN");
        let parsedToken = JSON.parse(token)
        dispatch({type: 'ACCESS_TOKEN', payload:parsedToken})
} 

    let Logout =()=>{
        window.localStorage.removeItem("TOKEN")
        window.location.assign('/login')
        dispatch({type: 'LOGOUT', payload:null})
    }

    const isAuth = auth?.payload?.access_token;
    const current_user = auth?.profile;
    let TOKEN = window.localStorage.getItem("TOKEN")
    let parsedToken = JSON.parse(TOKEN);
    let access_token =  parsedToken?.access_token;
   
    let getMe =  async () => {
            try{
                let {data} = await AuthInstance.get(`/auth/profile`, {
                    headers: {
                        Authorization : `Bearer ${access_token}`
                    }
                });
 
                dispatch({type:'GETME', profile : data})                                                         
            }catch(error){
                console.log(error)
            }
    }
    useEffect(()=>{
        fetchAccessToken();
        getMe();
    },[])
    return<AuthContextApi.Provider value={{auth, signup, login, Logout,isAuth, getMe, current_user }}>{children}</AuthContextApi.Provider>
}

export default AuthProvider


