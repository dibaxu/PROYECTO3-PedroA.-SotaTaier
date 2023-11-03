import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import ErrorComponent from './components/ErrorComponent'
import Cotizador from './pages/Cotizador'
import Historial from './pages/Historial'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route index path='/cotizador' element={<Cotizador />} />
          <Route path='/historial' element={<Historial />} />
        </Route>
        <Route path='*' element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
