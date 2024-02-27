

import React, { useContext, useEffect, useState  } from 'react'
import Spinner from '../spinner/spinner';
import Course from './Course';
import courseServices from '../../services/CourseServices'
import SearchCources from '../searchFilter/SearchCources';
// import { UserContextApi } from '../../context/UserContext';

const AllCourses = () => 
{
  // let {users, fetchUsers} = useContext(UserContextApi)
// console.log(users);
  let [state, setState ] = useState(null);
  let [searchTerm , setSearchTerm] = useState("");
  let fetchCourses = async ()=>{
    let data = await courseServices.fetchService();
    setState(data);
    // let {data} = await axios.get("http://localhost:3000/courses")

    // setState(data);
  }
  let handleSearch= (term)=>{
    setSearchTerm(term);
  }
  console.log(searchTerm);

  let FilteredCourse = state
  ?.filter(val =>{
    if(searchTerm === ""){
      return val;
    }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return val;
    }
  }).map(course => <Course key = {course.id} {...course} />)

  useEffect(()=>{
    fetchCourses();
    // fetchUsers();
  },[])
  return (
    <>
    <SearchCources handleSearch={handleSearch} />
    <h2>All courses</h2>
    <div className="courses">
{
  state === null ? <Spinner /> : FilteredCourse}
    </div>
    </>
  )
}

export default AllCourses
