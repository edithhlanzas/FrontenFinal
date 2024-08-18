import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";

const CustomerTable = () => {
    const [rows, setRows] = useState([]);// Almacenar datos

    useEffect(() => { // Obtener datos en cada render
        const fetchData = async () => {
             const response = await axios.get("http://localhost:3000/categorias");
             setRows(response.data);
         };
         fetchData();
     }, []);

    interface Row {
        id_categoria: number;
        Nombre: string;


    }
    
    const editarCustomer = (id: number) => () => {
        alert(id);
    }

    const eliminarCustomer = (id: number) => () => {
        alert(id);
    }

    const columns = [
        {
            name: "id_categoria",
            selector: (row: Row) => row.id_categoria
        },
        {
            name: "Nombre",
            selector: (row: Row) => row.Nombre
        },
        
        {
            name: "Acciones",
            cell: (row: Row) => <><div id='tableButtons'>
                <button onClick={editarCustomer(row.id_categoria)} className="btn btn-primary"><i className="material-icons-outlined">edit</i></button>
                <button onClick={eliminarCustomer(row.id_categoria)} className="btn btn-primary"><i className="material-icons-outlined">delete_forever</i></button>
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