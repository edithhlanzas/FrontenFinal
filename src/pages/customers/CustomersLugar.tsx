import React from 'react'
import CustomerTable from './CustomerTable'
import CategoriasTable from './CategoriasTable'
import LuagarTable from "./LugarTable"

const CustomersLugar = () => {
  return (
    <>
        <h1 className='header-section-create'>Lista de Lugares
            <button>Nuevo Lugar</button>
        </h1>
        <hr />
        <LuagarTable/>


    </>
  )
}

export default CustomersLugar