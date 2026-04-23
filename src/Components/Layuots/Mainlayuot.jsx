import React from 'react'
import { Outlet } from 'react-router'
import TopBar from '../TopBar'

const Mainlayuot = () => {
  return (
    <>
        <TopBar/>
        <Outlet/>
    </>
  )
}

export default Mainlayuot