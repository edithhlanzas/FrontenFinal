import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";

const CustomerTable = () => {
    const [rows, setRows] = useState([]);// Almacenar datos

    useEffect(() => { // Obtener datos en cada render
        const fetchData = async () => {
             const response = await axios.get("http://localhost:3000/inscripciones");
             setRows(response.data);
         };
         fetchData();
     }, []);

    interface Row {
        id_inscripcion: number;
        id_usuario: number;
        id_evento: number;
        fecha_inscripcion: string;
       

    }
    
    const editarCustomer = (id: number) => () => {
        alert(id);
    }

    const eliminarCustomer = (id: number) => () => {
        alert(id);
    }

    const columns = [
        {
            name: "id_inscripcion",
            selector: (row: Row) => row.id_inscripcion
        },
        {
            name: "id_usuario",
            selector: (row: Row) => row.id_usuario
        },
        {
            name: "id_evento",
            selector: (row: Row) => row.id_evento
        },
        {
            name: "fecha_inscripcion::",
            selector: (row: Row) => row.fecha_inscripcion
        },


        
        {
            name: "Acciones",
            cell: (row: Row) => <><div id='tableButtons'>
                <button onClick={editarCustomer(row.id_inscripcion)} className="btn btn-primary"><i className="material-icons-outlined">edit</i></button>
                <button className="btn btn-danger" onClick={eliminarCustomer(row.id_inscripcion)}><i className="material-icons-outlined">delete_forever</i></button>
            </div>
            </>
        }
    ];


  return (
    <div className="container my-5">
        <DataTable columns={columns} data={rows} pagination selectableRows />
    </div>
  )
}

export default CustomerTable