import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerTable from './CustomerTable';
import AgregarEvento from '../acciones/AgregarEvento';
import ModalComponent from '../../components/modal/ModalComponent';
import Swal from 'sweetalert2';

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

const Customers: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [events, setEvents] = useState<EventoType[]>([]);

  useEffect(() => {
    // Función para obtener los datos de eventos
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/eventos');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []); // Dependencias vacías para que se ejecute solo al montar el componente

  const handleSave = async (newEvent: Omit<EventoType, 'id_evento'>) => {
    try {
      await axios.post('http://localhost:3000/eventos', newEvent);
      // Actualiza la lista de eventos después de agregar
      const updatedEvents = await axios.get('http://localhost:3000/eventos');
      setEvents(updatedEvents.data);
      setModalOpen(false);
      Swal.fire({
        title: '¡Guardado!',
        text: 'El evento ha sido agregado.',
        icon: 'success',
      });
    } catch (error) {
      console.error('Error adding event:', error);
      Swal.fire({
        title: 'Error',
        text: 'No se pudo agregar el evento.',
        icon: 'error',
      });
    }
  };

  return (
    <>
      <h1 className='header-section-create'>
        Lista de Evento
        <button className="btn btn-primary ml-3" onClick={() => setModalOpen(true)}>Nuevo Evento</button>
      </h1>
      <hr />
      <CustomerTable events={events} />
      {modalOpen && (
        <ModalComponent
          title="Agregar un nuevo evento"
          body={<AgregarEvento onSave={handleSave} />}
          buttonOK="Guardar"
          buttonClose="Cancelar"
          onClose={() => setModalOpen(false)}
          onOK={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Customers;
