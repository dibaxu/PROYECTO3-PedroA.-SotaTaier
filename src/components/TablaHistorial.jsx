import { useState, useEffect } from "react";

export default function TablaHistorial({cotizaciones}) { 
  
  const [cotizacionesExistentes, setCotizacionesExistentes] = useState([])
  useEffect(() => { setCotizacionesExistentes(cotizaciones)}, [cotizaciones] )

 
  return (
    <>
        <table className="table-auto w-full overflow-x-scroll mb-4 bg-white border border-collapse border-gray-300 rounded-lg text-center">
            <thead>
              <tr>
                <th className="py-2 px-2 border-b border-gray-300">
                  Fecha de cotización
                </th>
                <th className="py-2 px-2 border-b border-gray-300">Propiedad</th>
                <th className="py-2 px-2 border-b border-gray-300">Ubicación</th>
                <th className="py-2 px-2 border-b border-gray-300">
                  Metros cuadrados
                </th>
                <th className="py-2 px-2 border-b border-gray-300">
                  Póliza mensual
                </th>
              </tr>
            </thead>
            <tbody>
                {cotizacionesExistentes?.map((cotizacion, index) => (                  
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-300">{cotizacion.fecha}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{cotizacion.tipoPropiedad}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{cotizacion.tipoUbicacion}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{cotizacion.metros2}</td>
                    <td className="py-2 px-4 border-b border-gray-300">${cotizacion.poliza}</td>                    
                  </tr>
                ))}              
            </tbody>
          </table>
    </>
  )
}
