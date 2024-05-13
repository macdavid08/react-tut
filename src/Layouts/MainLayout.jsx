import React from 'react'
import { Outlet } from 'react-router-dom'
import {NavBar} from '../components/NavBar'

export const MainLayout = () => {
  return (
   <>
   <NavBar/>
   <Outlet/>
   </>
  )
}
