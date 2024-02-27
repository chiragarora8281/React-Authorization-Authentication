import React, { useState } from 'react'
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import courseServices from '../../services/CourseServices'
import toast from 'react-hot-toast';


const CreateCourse = () => {
    let navigate = useNavigate();
    let [state ,setState] = useState({
        title: "",
        trainer: "",
        description:"",
        createdAt: "",
        isLoading: false,
    });
    let {title, trainer, isLoading,createdAt, updatedAt,description} = state

    let handleChange = e=>{
        let {name  , value} = e.target
        // e.preventDefault();
        setState({...state, [name]: value})

    }

    let handleSubmit =  async e=>{
        e.preventDefault();
        try{
            let payload = {title, trainer, description, createdAt};

            courseServices.createService(payload)


            // axios way
            // await axios.post('http://localhost:3000/courses',payload);

            //build in window fetch api with post
            // await window.fetch("http://localhost:3000/courses",{
            //     method: 'POST',
            //     body: JSON.stringify(payload), 
            // })
            navigate('/')
            console.log(payload);
            toast.success("succesfully course has been created")
        }catch(error){
            console.log(error);

        }
    }
  return (
    <>
    <main className='authBlock'>
    <h1>create course</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text"
                name='title'
                value={title} 
                onChange = {handleChange}
                required 
                placeholder='enter title'/>
            </div>
            <div className="form-group">
                <label htmlFor="trainer">Trainer</label>
                <input type="text"
                name="trainer"
                value={trainer}
                onChange={handleChange} 
                required
                 placeholder='enter trainer' />
            </div>
            <div className="form-groupDetails">
                <label htmlFor="description">description</label>
                <textarea name="description" id="description" cols="30" rows="3" value={description} onChange={handleChange}></textarea>
            </div>
            <div className="form-groupDetails">
                <label htmlFor="createdAt">Course create At</label>
                <input type="date"
                name="createdAt"
                value={createdAt}
                onChange={handleChange} 
                required
                 placeholder='enter create at ' />
            </div>
            <div className="form-group">
                <button>{isLoading ? 'loading' : 'create course'}</button>
            </div>
        </form>
    </main>
    </>
  )
}

export default CreateCourse

