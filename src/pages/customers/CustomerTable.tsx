import React from 'react';
import DataTable from "react-data-table-component";
import Swal from 'sweetalert2';
import EditarProducto from "../acciones/EditarProducto";
import ModalComponent from '../../components/modal/ModalComponent';
import axios from 'axios';

interface EventoType {
  id_evento: number;
  Titulo: string;
  Descripción: string;
  Fecha: string;
  Hora: string;
  id_usuario: number;
  id_lugar: number;
  id_categoria: number;
}

interface CustomerTableProps {
  events: EventoType[];
}

const CustomerTable: React.FC<CustomerTableProps> = ({ events }) => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState<EventoType | null>(null);

  const editarCustomer = (row: EventoType) => () => {
    setSelectedRow(row);
    setModalOpen(true);
  };

  const eliminarCustomer = (row: EventoType) => () => {
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
          await axios.delete(`http://localhost:3000/eventos/${row.id_evento}`);
          Swal.fire({
            title: "¡Eliminado!",
            text: "El evento ha sido eliminado.",
            icon: "success"
          });
          // Actualizar la lista de eventos después de eliminar
          // Aquí deberías llamar a una función para refrescar los eventos, si es necesario
        } catch (error) {
          console.error("Error deleting event:", error);
          Swal.fire({
            title: "Error",
            text: "No se pudo eliminar el evento.",
            icon: "error"
          });
        }
      }
    });
  };

  const handleSave = async (updatedEvento: EventoType) => {
    try {
      await axios.put(`http://localhost:3000/eventos/${updatedEvento.id_evento}`, updatedEvento);
      // Actualiza el evento en la lista de eventos
      // Aquí deberías actualizar la lista de eventos, si es necesario
      setModalOpen(false);
      Swal.fire({
        title: "¡Guardado!",
        text: "El evento ha sido actualizado.",
        icon: "success"
      });
    } catch (error) {
      console.error("Error updating event:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudo actualizar el evento.",
        icon: "error"
      });
    }
  };

  const columns = [
    {
      name: "ID Evento",
      selector: (row: EventoType) => row.id_evento,
    },
    {
      name: "Título",
      selector: (row: EventoType) => row.Titulo,
    },
    {
      name: "Descripción",
      selector: (row: EventoType) => row.Descripción,
    },
    {
      name: "Fecha",
      selector: (row: EventoType) => row.Fecha,
    },
    {
      name: "Hora",
      selector: (row: EventoType) => row.Hora,
    },
    {
      name: "ID Usuario",
      selector: (row: EventoType) => row.id_usuario,
    },
    {
      name: "ID Lugar",
      selector: (row: EventoType) => row.id_lugar,
    },
    {
      name: "ID Categoría",
      selector: (row: EventoType) => row.id_categoria,
    },
    {
      name: "Acciones",
      cell: (row: EventoType) => (
        <div id='tableButtons'>
          <button onClick={editarCustomer(row)} className="btn btn-primary"><i className="material-icons-outlined">edit</i></button>
          <button className="btn btn-danger" onClick={eliminarCustomer(row)}><i className="material-icons-outlined">delete_forever</i></button>
        </div>
      )
    }
  ];

  return (
    <div className="container my-5">
      <DataTable columns={columns} data={events} />
      {modalOpen && selectedRow && (
        <ModalComponent
          title="Editar un evento"
          body={<EditarProducto producto={selectedRow} onSave={handleSave} />}
          buttonOK="Guardar"
          buttonClose="Cancelar"
          onClose={() => setModalOpen(false)}
          onOK={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default CustomerTable;
