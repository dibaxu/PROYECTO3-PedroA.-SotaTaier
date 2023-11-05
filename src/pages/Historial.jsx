import imagen from "../assets/undraw_house_searching_re_stk8.svg";
import { useNavigate } from "react-router-dom";
import TablaHistorial from "../components/TablaHistorial";
import { useEffect, useState } from "react";

export default function Historial() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const [cotizaciones, setCotizaciones] = useState([]);
  useEffect(() => {
    const cotizacionesExistentes = JSON.parse(localStorage.getItem("cotizaciones") );
    setCotizaciones(cotizacionesExistentes);    
  }, []);
  const limpiarHistorial = () => {    
    localStorage.removeItem("cotizaciones");
    setCotizaciones([])
  }
  
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
            alt="imagen de una casa"
            className="object-cover bg-center h-16 md:h-36  aspect-auto opacity-80"
          />
        </section>

        <div className="overflow-auto w-4/5 md:w-full rounded-lg">
          <TablaHistorial cotizaciones={cotizaciones} />
        </div>

        <div>
          <button
            className=" bg-white font-normal w-28 h-9 mb-3 rounded-md border-emerald-500 border-x border-y text-emerald-600 text-sm hover:bg-emerald-500 hover:text-white transition-all duration-100"
            onClick={handleClick}
          >
            VOLVER
          </button>
          <button className=" bg-white font-normal w-28 h-9 mb-3 rounded-md border-emerald-500 border-x border-y text-emerald-600 text-sm hover:bg-emerald-500 hover:text-white transition-all duration-100"
          onClick={limpiarHistorial}>LIMPIAR HISTORIAL</button>
        </div>
      </div>
    </main>
  );
}
