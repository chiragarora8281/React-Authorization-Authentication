import React, { useState, useContext } from 'react'
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContextApi } from '../context/AuthContext';


const Register = () => {
    let {signup} = useContext(AuthContextApi)
    let navigate = useNavigate();
    let [state ,setState] = useState({
        name: "",
        email: "",
        password:"",
        avatar: "",
        isLoading: false,
    });
    let {name, email, password, avatar, isLoading} = state

    let handleChange = e=>{
        let {name , value} = e.target
        // e.preventDefault();
        setState({...state, [name]: value})

    }

    let handleSubmit =  async e =>{
        e.preventDefault();
        try{
            let payload = {name, email, password, avatar};
            // console.log(payload);
            signup(payload)
            toast.success("succesfully registered")
            navigate('/login')
        }catch(error){
            console.log(error);

        }
    }
  return (
    <>
    <main className='authBlock'>
    <h1>Sign UP</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Name</label>
                <input type="text"
                name='name'
                value={name} 
                onChange = {handleChange}
                required 
                placeholder='enter name'/>
            </div>
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
            <div className="form-groupDetails">
                <label htmlFor="createdAt">Avatar url</label>
                <input type="url"
                name="avatar"
                value={avatar}
                onChange={handleChange} 
                required
                 placeholder='enter avatar url' />
            </div>
            <div className="form-group">
                <button>{isLoading ? 'loading' : 'Register'}</button>
            </div>
        </form>
    </main>
    </>
  )
}

export default Register

