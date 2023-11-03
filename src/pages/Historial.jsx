import React from "react";
import imagen from "../assets/undraw_house_searching_re_stk8.svg";
import { useNavigate } from "react-router-dom";

export default function Historial() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <main className="flex flex-wrap h-max">
      <div className="flex flex-col justify-center items-center relative w-full max-w-4xl mx-auto my-6 p-3 bg-indigo-100 rounded-3xl shadow-lg shadow-indigo-500/50">
        <section className="flex flex-row justify-center items-center p-4">
          <div className="w-1/2 ">
            <h1 className="font-bold text-2xl text-center text-gray-600">
              Historial de Cotizaciones
            </h1>
            <p className="text-center">
              Aquí podrás hacer un seguimiento de tus consultas.
            </p>
          </div>
          <img
            src={imagen}
            alt=""
            className="object-cover bg-center h-16 md:h-36  aspect-auto opacity-80"
          />
        </section>

        <div className="overflow-auto w-4/5 md:w-full rounded-lg">
          <table className="table-auto w-full overflow-x-scroll mb-4 bg-white border border-collapse border-gray-300 rounded-lg text-start">
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
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">John Doe</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  john.doe@example.com
                </td>
                <td className="py-2 px-4 border-b border-gray-300">Developer</td>
                <td className="py-2 px-4 border-b border-gray-300">Developer</td>
                <td className="py-2 px-4 border-b border-gray-300">Developer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">Jane Smith</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  jane.smith@example.com
                </td>
                <td className="py-2 px-4 border-b border-gray-300">Designer</td>
                <td className="py-2 px-4 border-b border-gray-300">
                  jane.smith@example.com
                </td>
                <td className="py-2 px-4 border-b border-gray-300">Designer</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-300">
                  Mark Johnson
                </td>
                <td className="py-2 px-4 border-b border-gray-300">
                  mark.johnson@example.com
                </td>
                <td className="py-2 px-4 border-b border-gray-300">Manager</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <button
            className=" bg-white font-normal w-28 h-9 mb-3 rounded-md border-emerald-500 border-x border-y text-emerald-600 text-sm hover:bg-emerald-500 hover:text-white transition-all duration-100"
            onClick={handleClick}
          >
            VOLVER
          </button>
        </div>
      </div>
    </main>
  );
}
