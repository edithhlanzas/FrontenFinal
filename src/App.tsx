import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Customers from './pages/customers/Customers'
import CustomberUsuarios from './pages/customers/CustomerUsuarios'
import CustomersCa from './pages/customers/CustomersCa'
import CustomersLugar from './pages/customers/CustomersLugar'
import CustomersInscripciones from './pages/customers/CustomersInscripciones'



function App() {
  
  return (
    <>
    <Header />
    <main>
      <aside>
        <MenuLateral />
      </aside>

      <section id="contenido">
        <Routes>
          <Route path="/Categoria" element={<CustomersCa/>} />
          <Route path="/Inscripcion" element={<CustomersInscripciones/>} />
          <Route path="/Eventos" element={<Customers />} />
          <Route path="/Lugar" element={<CustomersLugar />} />  
          <Route path="/Usuario" element={<CustomberUsuarios/>} />    
        </Routes>
      </section>
    </main>

    </>
  )
}

export default App
