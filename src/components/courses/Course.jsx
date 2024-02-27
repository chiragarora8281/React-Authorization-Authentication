import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({title, trainer,id, description,createdAt}) => {
  return (
    <div className='course-container'>
    <h2>{title}</h2>
    <hr />
    <p>{trainer}</p>
    <p className='view_more'>
    <Link to={`/${id}`} className='btn-info' state={{id,title,trainer,description , createdAt}}>view More</Link>
    </p>
    </div>

  )
}

export default Course