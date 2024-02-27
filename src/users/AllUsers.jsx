import React, { useEffect } from 'react'
// import { useAllUsers } from '../context/UserContext';
import useFetchUser from '../hooks/UserHooks';
import Spinner from '../components/spinner/spinner';
import { Link } from 'react-router-dom';

const AllUsers = () => {
    // let val = useAllUsers();
    // let val = useFetchUser();
    // let {users , isLoading,} = useFetchUser();
    let {
        users: {users, isLoading},
    } = useFetchUser()

    // console.log(fetchSingleUser);
    // console.log(users);
   
  return (
    <>
    {
        isLoading === true ? <Spinner /> : 
        (
        <section className='userBlock'> 
        <article className="container">
            <header>
                <h2>users</h2>
            </header>
            <>
                <table>
                    <thead>
                        <tr>
                            <th>photo</th>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>Age</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.users.map(user =>(
                            
                                    <tr key={user.id}>
                                        <td>
                                            <img src={user.image} alt={user.firstName} />
                                        </td>
                                        <td>
                                            {user.id}
                                        </td>
                                        <td>{user.firstName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td><Link to={`/users/${user.id}`} className='nav-link'>View More</Link></td>
                                    </tr>
                        )
                            )
                        }
                    </tbody>
                </table>
            </>
        </article>
    </section>
        )
    }
    </>
  )
}

export default AllUsers
