import imagen from '../assets/undraw_in_the_office_re_jtgc.svg'
import FormCotizador from '../components/FormCotizador'


export default function Cotizador() {
  

  
  return (
    <main className='flex flex-wrap min-h-screen'>
      
      <div className='flex flex-col justify-center items-center relative w-full max-w-2xl h-fit mx-auto my-8 p-3 bg-indigo-100 rounded-3xl shadow-lg shadow-indigo-500/50' >

        <section className='flex flex-row  items-center justify-center p-4 w-full'>
          <div className='w-1/2'>
            <h1 className='font-bold text-2xl text-center text-gray-600'>Cotizador de Seguros</h1>
            <p className='text-center'>Elige el seguro de propiedad que te brinda la tranquilidad que necesitas.</p>
          </div>          
          <img src={imagen} alt="" className='object-cover bg-center aspect-auto h-36  opacity-80' />
        </section>
        <FormCotizador  />

        <div>

        </div>
      </div>
      
    </main>
  )
}
