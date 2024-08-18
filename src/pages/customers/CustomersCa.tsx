import React from 'react'
import CustomerTable from './CustomerTable'
import CategoriasTable from './CategoriasTable'

const CustomersCa = () => {
  return (
    <>
        <h1 className='header-section-create'>Lista de Categorias
            <button>Nueva Categoria</button>
        </h1>
        <hr />
        <CategoriasTable/>


    </>
  )
}

export default CustomersCa