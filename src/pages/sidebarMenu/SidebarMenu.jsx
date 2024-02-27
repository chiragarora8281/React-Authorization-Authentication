import { Fragment, useContext } from 'react';
import React from 'react'
import {  NavLink } from 'react-router-dom';
import { AuthContextApi } from '../../context/AuthContext';

const SidebarMenu = () => {
    let {isAuth } = useContext(AuthContextApi);
    let IsAuth = ()=>{
        return(
            <Fragment>
            <li>
                <NavLink to="/create-course" className={({isActive})=> (isActive ?'active' : '')}>create course</NavLink>
            </li>
            <li>
                <NavLink to="/users" className={({isActive})=> (isActive ?'active' : '')}>Users</NavLink>
            </li>
            </Fragment>
        )
    }
  return (
        <ul>
            <li>
            <NavLink to="/" className={({isActive})=> (isActive ?'active' : '')}>Home</NavLink>
            </li>
            {isAuth ? <IsAuth />: ""}
        </ul>

  )
}

export default SidebarMenu;