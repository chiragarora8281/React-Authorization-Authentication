import React , {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CourseServices from '../../services/CourseServices';
import toast from 'react-hot-toast';

const EditCourse = () => {
    let navigate = useNavigate();
    let { id }  = useParams();
    let [state ,setState] = useState({
        title: "",
        trainer: "",
        description:"",
        updatedAt: "",
        isLoading: false,
    });
   
    let {title, trainer, isLoading, createdAt, updatedAt,description} = state
    
    useEffect(()=> {
        let fetchCourse = async ()=>{
            let data =  await CourseServices.fetchId(id);
        // let {data} = await axios.get(`http://localhost:3000/courses/${id}`)
        setState(data)
    }
        fetchCourse();
    } , [id]);

    let handleChange = e=>{
        let {name  , value} = e.target
        // e.preventDefault();
        setState({...state, [name]: value})

    }

    let handleSubmit =  async e=>{
        e.preventDefault();
        try{
            let payload = {title, trainer, description, updatedAt};
            await CourseServices.updateService(id, payload);
            toast.success("course has been updated successfully...")
            // await axios.put(`http://localhost:3000/courses/${id}`,payload);
            navigate('/')
        }catch(error){
            console.log(error);

        }
    }
  return (
    <>
    <main className='authBlock'>
    <h1>Update course</h1>
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
                <button>{isLoading ? 'loading' : 'update course'}</button>
            </div>
        </form>
    </main>
    </>
  )
}

export default EditCourse