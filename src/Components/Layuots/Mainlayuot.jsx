import React from 'react'
import { Outlet, useLocation } from 'react-router'
import TopBar from '../TopBar'
import SearchBar from '../SearchBar'
import Navbar from '../Navbar'
import Footer from '../Footer'
import FooterTop from '../FooterTop'
import Breadcumb from '../Breadcumb'

const Mainlayuot = () => {
  let PageName = useLocation().pathname
  
  
  return (
    <>
        <TopBar/>
        <SearchBar/>
        <Navbar/>
        {PageName !== '/' && <Breadcumb/> }
        <Outlet/>
        <FooterTop/>
        <Footer/>
    </>
  )
}

export default Mainlayuot