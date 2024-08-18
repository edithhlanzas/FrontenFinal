import React from 'react'
import { Link } from 'react-router-dom'

const MenuLateral = () => {
  return (
    <nav>
        <ul id="menu_principal">
        
        <li>
            <Link to="Categoria/"><i className="material-icons-outlined">home</i>Categoria </Link>
        </li>
        
        <li>
            <Link to="/Eventos"><i className="material-icons-outlined">local_grocery_store</i> Eventos</Link>
         </li>
        <li>
            <Link to="/Inscripcion"><i className="material-icons-outlined">groups</i> Inscripcion</Link>
        </li>
        
        <li>
         <Link to="/Lugar"><i className="material-icons-outlined">home</i> Lugar</Link>
        </li>

        <li>
         <Link to="/Usuario"><i className="material-icons-outlined">home</i> Usuario</Link>
        </li>

         </ul>
    </nav>
  )
} 

export default MenuLateral