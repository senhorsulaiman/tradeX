import React from 'react'
import { Navbar, Sidebar, Submenu } from '../components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Submenu/>
      <Outlet/>





    </>
  )
}

export default HomeLayout