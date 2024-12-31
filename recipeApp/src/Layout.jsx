import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Layout