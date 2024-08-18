import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import Swal from 'sweetalert2';

interface Row {
    id_usuario: number;
    Nombre: string;
    Correo_electronico: string;
    Contraceña: string;
    rol: number;
}

const CustomerTable = () => {
    const [rows, setRows] = useState<Row[]>([]); // Almacenar datos

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuarios");
            setRows(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => { 
        fetchData();
    }, []);

    const eliminarCustomer = (row: Row) => () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡Esta acción no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, estoy seguro!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3000/usuarios/${row.id_usuario}`);
                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "El usuario ha sido eliminado.",
                        icon: "success"
                    });
                    // Actualizar la lista de usuarios después de eliminar
                    fetchData();
                } catch (error) {
                    console.error("Error deleting user:", error);
                    Swal.fire({
                        title: "Error",
                        text: "No se pudo eliminar el usuario.",
                        icon: "error"
                    });
                }
            }
        });
    };

    const columns = [
        {
            name: "ID Usuario",
            selector: (row: Row) => row.id_usuario,
            sortable: true
        },
        {
            name: "Nombre",
            selector: (row: Row) => row.Nombre,
            sortable: true
        },
        {
            name: "Correo Electrónico",
            selector: (row: Row) => row.Correo_electronico,
            sortable: true
        },
        {
            name: "contraceña",
            selector: (row: Row) => row.Contraceña,
            sortable: true
        },
        {
            name: "rol",
            selector: (row: Row) => row.rol,
            sortable: true
        },

        {
            name: "Acciones",
            cell: (row: Row) => (
                <div id='tableButtons'>
                    <button className="btn btn-danger" onClick={eliminarCustomer(row)}><i className="material-icons-outlined">delete_forever</i></button>
                </div>
            )
        }
    ];

    return (
        <div className="container my-5">
            <DataTable columns={columns} data={rows} pagination selectableRows />
        </div>
    );
}

export default CustomerTable;
