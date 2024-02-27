import React from 'react'
import NavbarContainer from './pages/navbar/NavbarContainer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const Layouts = () => {
  return (
    <section id='main-block'>
        <article className='container'>
            <NavbarContainer />
            <Outlet/>
            <Toaster />
        </article>
    </section>
  )
}

export default Layouts