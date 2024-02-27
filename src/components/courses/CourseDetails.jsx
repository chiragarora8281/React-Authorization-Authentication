import React from 'react';
import Moment from 'moment';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import CourseServices from '../../services/CourseServices';
import toast from 'react-hot-toast';
const CourseDetails = () => {
    let navigate = useNavigate();
    let { state: {id,title,trainer,description,createdAt}} = useLocation();

let deleteCourse = async (id) =>{
    if(window.confirm() === true){
        //  axios.delete(`http://localhost:3000/courses/${id}`);
        await CourseServices.deleteService(id);
        toast.success("deleted succesfully")
         window.location.assign('/')
    }
    else navigate('/');


}
  return (
    <div className="course_details">
        <header>
        <Link to= '/' className='delete' onClick={()=> deleteCourse(id)}>delete</Link>
        <Link to = {`/edit/${id}`} className='edit'>edit</Link>
        <Link to= '/' className='back'>Back</Link>
        <h1>{title}</h1>
        </header>
        <br />
        <main>
            <p>
                Trainer: <strong>{trainer}</strong>
            </p>
            <br />
            <p>{description}</p>
        </main>
        <br />
        <footer>
            <span className="date_create">Course Created At : </span>
        <span>
            <strong>
                {Moment(createdAt).fromNow()}
                </strong>
                </span>
        </footer>


     
    </div>

  )
}

export default CourseDetails