import React from 'react'
import  imgCotiza  from '../assets/undraw_calculator_re_alsc.svg'
import imgHistorial from '../assets/undraw_house_searching_re_stk8.svg' 
import { Link } from 'react-router-dom'  

export default function Home() {
  return (
    <main className='h-max'>  
        <div className='mt-12 flex justify-center items-end font-bold font-serif text-2xl align-bottom space-x-3'>
            <h1 className=''>Bienes Raíces</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-signature" width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 17c3.333 -3.333 5 -6 5 -8c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 4.877 2.5 6c1.5 2 2.5 2.5 3.5 1l2 -3c.333 2.667 1.333 4 3 4c.53 0 2.639 -2 3 -2c.517 0 1.517 .667 3 2"></path>
            </svg>
        </div>

        <div className='flex flex-wrap w-full justify-around mt-12 p-2'>
            <Link to="/cotizador" className='w-full sm:w-1/2 max-w-sm h-40 mx-auto mb-4 p-3 bg-indigo-50 rounded-md shadow-lg shadow-indigo-500/50 flex items-center cursor-pointer hover:scale-105 transition-all duration-150'>                
                <h2 className='w-1/2 font-medium text-center'>Cotizá la póliza de seguro para tu propiedad</h2>
                <img src={imgCotiza} alt="" className=' w-1/2 aspect-auto' />                
            </Link>
            
            <Link to="/historial" className='w-full sm:w-1/2 max-w-sm h-40 mx-auto p-3 bg-indigo-50 rounded-md shadow-lg shadow-indigo-500/50 flex flex-row-reverse items-center cursor-pointer hover:scale-105 transition-all duration-150' >
                <h2 className='w-1/2 font-medium text-center'>Historial de Cotizaciones</h2>
                <img src={imgHistorial} alt="" className='w-1/2 aspect-auto' />
            </Link>
            
        </div>
      
    </main>
  )
}

