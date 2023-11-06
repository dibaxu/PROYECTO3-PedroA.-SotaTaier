import {datosPropiedad, datosUbicacion, costoM2} from '../constants/constantes'
import { useState } from 'react'



export default function FormCotizador() {
    const propiedades = datosPropiedad
    const ubicaciones = datosUbicacion
    const [co, setCo] = useState(null)
    const [inputs, setInputs] = useState({});    
    const handleChanges = (e) => {        
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });        
    }

    const objectKeyFind = (array, value) => {
        const objFound = array.find((element) => element.factor === +value)
        if (objFound) {
            return objFound.tipo
        } else {
            console.log("NO ESTA ANDANDO ESTA VERGA")
        }
        
    };
    

    const cotizar = (e) => {
        e.preventDefault();
        const {propiedad, ubicacion, metros2} = inputs;        
        const cotizacion = propiedad * ubicacion * metros2 * costoM2;                 
        setCo(cotizacion.toFixed(2))
    }

    const guardarCotizacion = () => { 
        const cotizacionesExistentes = JSON.parse(localStorage.getItem("cotizaciones") );        
        const tipoPropiedad = objectKeyFind(propiedades, inputs.propiedad)
        const tipoUbicacion = objectKeyFind(ubicaciones, inputs.ubicacion)
        const {metros2} = inputs;        
        const cotizacion = {fecha: new Date().toLocaleDateString(), tipoPropiedad, tipoUbicacion, metros2, poliza: co}
        if (cotizacionesExistentes) {
            cotizacionesExistentes.push(cotizacion)
            localStorage.setItem("cotizaciones", JSON.stringify(cotizacionesExistentes));
        } else {
            localStorage.setItem("cotizaciones", JSON.stringify([cotizacion]));
        }
        setCo(null)        
        setInputs({})
    }
    

    return (
        <>
            <form onSubmit={cotizar} className='flex flex-col z-10 w-full justify-center items-center px-5'>                

                <label htmlFor="propiedad" className=' font-medium '>Selecciona el tipo de propiedad</label>            
                <select id="propiedad" name='propiedad' value={inputs.propiedad || "..." } onChange={handleChanges}
                className='w-3/4 min-w-1/2 px-1 py-2 mb-2 rounded-md border-2 border-slate-200 focus:border-emerald-500 focus:outline-none bg-white'>
                    <option defaultValue hidden>...</option>
                    {propiedades.map((propiedad) => {              
                    return <option key={propiedad.tipo} value={propiedad.factor}>{propiedad.tipo}</option>              
                    })}                        
                </select>
            
                <label htmlFor="ubicacion" className=' font-medium '>Selecciona su ubicación</label>
                <select id="ubicacion" name='ubicacion' value={inputs.ubicacion || "..."} onChange={handleChanges}
                className='w-3/4 min-w-1/2 px-1 py-2 mb-2 rounded-md border-2 border-slate-200 focus:border-emerald-500 focus:outline-none bg-white'>
                    <option defaultValue hidden>...</option>
                    {ubicaciones.map((ubicacion) => {              
                    return <option key={ubicacion.tipo} value={ubicacion.factor}>{ubicacion.tipo}</option>
                    })}            
                </select>
            
                <label htmlFor="metros2" className=' font-medium '>Ingresa los metros cuadrados:</label>
                <input type="number" name='metros2' placeholder='ej: 20' min={2}  value={inputs.metros2 ?? "ej: 20"} onChange={handleChanges}
                className='w-3/4 min-w-1/2 px-1 py-2 mb-2 rounded-md border-2 border-slate-200 focus:border-emerald-500 focus:outline-none' />

                <button type='submit' className=' bg-white font-normal w-28 h-9 mb-3 rounded-md border-emerald-500 border-x border-y text-emerald-600 text-sm hover:bg-emerald-500 hover:text-white transition-all duration-100'>COTIZAR</button>
            </form>

            {co && <div className='flex flex-row pb-2 space-x-2 items-center align-middle'>
                <p className='text-xl font-medium'>El costo de tu póliza es de: ${co}</p>
                <button onClick={guardarCotizacion} className=' bg-white font-normal  h-9 px-1 py-2 rounded-md border-emerald-500 border text-emerald-600 text-sm hover:bg-emerald-500 hover:text-white transition-all duration-100'>Guardar Cotización</button>
            </div>
            }
        </>
    )
}
