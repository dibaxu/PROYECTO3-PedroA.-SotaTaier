import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../pages/Layout'

export default function Navbar() {
  return (
    <nav className="container bg-teal-800 mx-auto flex items-center justify-between p-4 text-white font-serif md:rounded-b-lg bg-opacity-50 shadow-2xl ">
      <div className="flex items-center ">
        <Link to="/" className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-signature" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2"></path>
          </svg>
          <span className="font-bold text-xl hidden md:block pl-4">Bienes Raíces SRL</span>
        </Link>        
      </div>
      <div className="flex items-center space-x-7">
        <Link to="/" className="text-white hover:underline decoration-2 underline-offset-4 transition-all duration-150">Inicio</Link>
        <Link to="/cotizador" className="text-white hover:underline decoration-2 underline-offset-4 transition-all duration-150">Cotizador</Link>
        <Link to="/historial" className="text-white hover:underline decoration-2 underline-offset-4 transition-all duration-150">Historial</Link>
      </div>
    </nav>
  )
}
