import React, { useEffect } from 'react'
import useFetchUser from '../hooks/UserHooks'
import { Link, useParams } from 'react-router-dom'
import Moment from 'moment'
const SingleUser = () => {
  let {fetchSingleUser, users} = useFetchUser()
  let {id} = useParams();
  useEffect(()=>{
    fetchSingleUser(id)
  },[id])
  // let { email,image,createdAt, updatedAt, age,name} = singleUser
  return (
    <>{users.singleUser === null ? "loading..." :
    <div className="course_details">
        <header>
        <Link to= '/' className='delete'>delete</Link>
        <Link to = {`/edit/${id}`} className='edit'>edit</Link>
        <Link to= '/users' className='back'>Back</Link>
        </header>
        <br />
        <main>
        <p>
              <span>name : </span>
              <strong>{users?.singleUser.firstName}</strong>
            </p>
            <p>
              <span>email : </span>
              <strong>{users?.singleUser.email}</strong>
            </p>
            <br />
            <p>{users?.singleUser?.age}</p>
        </main>
        <br />
        <footer>
            <span className="date_create">Course Created At : </span>
        <span>
            <strong>
                {Moment(users?.singleUser.createdAt).fromNow()}
                </strong>
                </span>
        </footer>
    </div>
    }
  </>
  )
}

export default SingleUser
