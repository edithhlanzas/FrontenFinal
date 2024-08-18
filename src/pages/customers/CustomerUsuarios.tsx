import React from 'react'
import InscripcionTable from './InscripcionTable'
import UsuariosTable from './UsuariosTable'


const CustomerUsuarios = () => {
  return (
    <>
        <h1 className='header-section-create'>Lista de Usuarios
            <button>Nuevo Usuario</button>
        </h1>
        <hr />
        <UsuariosTable/>


    </>
  )
}

export default CustomerUsuarios