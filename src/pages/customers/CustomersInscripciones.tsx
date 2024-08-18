import React from 'react'
import InscripcionTable from './InscripcionTable'



const CustomerInscripciones = () => {
  return (
    <>
        <h1 className='header-section-create'>Lista de Inscripciones
            <button>Nueva Inscripcion</button>
        </h1>
        <hr />
        <InscripcionTable/>


    </>
  )
}

export default CustomerInscripciones