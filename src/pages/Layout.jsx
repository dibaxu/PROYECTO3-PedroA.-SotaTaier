import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' box-border antialiased bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400 via-indigo-200 to-teal-300 m-0 w-full h-screen font-sans'>
        <Navbar />
        <Outlet /> 
        <Footer />
    </div>
  )
}
