import React, { useState, useContext } from 'react'
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContextApi } from '../context/AuthContext';


const Login = () => {
    let {login} = useContext(AuthContextApi)
    let navigate = useNavigate();
    let [state ,setState] = useState({
        email: "",
        password:"",
        isLoading: false,
    });
    let { email, password, isLoading} = state

    let handleChange = e=> {
        let {name , value} = e.target
        setState({...state, [name]: value})

    }

    let handleSubmit =  async e =>{
        e.preventDefault();
        try{
            let payload = { email, password};
            // console.log(payload);
            await login(payload);
            navigate("/users")
            toast.success("succesfully logged in ")
            // navigate('/users')
        }catch(error){
            console.log(error);
            toast.error(error.response.statusText);
        }
    }
  return (
    <>
    <main className='authBlock'>
    <h1>LOGIN</h1>
        <form action="" onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="trainer">email</label>
                <input type="text"
                name="email"
                value={email}
                onChange={handleChange} 
                required
                 placeholder='enter email' />
            </div>
            <div className="form-groupDetails">
                <label htmlFor="description">password</label>
                <input name="password" id="password" value={password} onChange={handleChange} required></input>
            </div>

            <div className="form-group">
                <button>{isLoading ? 'loading' : 'Login'}</button>
            </div>
        </form>
    </main>
    </>
  )
}

export default Login


