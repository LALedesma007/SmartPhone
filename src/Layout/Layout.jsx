import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.css'

const Layout = () => {
  
  return (
    <div className="layout-container"> 
      <Navbar/>
      <Outlet />
      <Footer className="footerLayout"/>
    </div>
  )
}

export default Layout