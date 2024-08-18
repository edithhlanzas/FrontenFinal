import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define el tipo Evento aquí
interface Evento {
  id_evento: number;
  Titulo: string;
  Descripción: string;
  Fecha: string;
  Hora: string;
  id_usuario: number;
  id_lugar: number;
  id_categoria: number;
}

interface Usuario {
  id_usuario: number;
  Nombre: string;
  Correo_electronico: string;
  Contraceña: string;
  rol: string;
}

interface Lugar {
  id_lugar: number;
  Nombre: string;
  Direccion: string;
  Capacidad: number;
}

interface Categoria {
  id_categoria: number;
  Nombre: string;
}

interface AgregarEventoProps {
  onSave: (newEvento: Omit<Evento, 'id_evento'>) => void;
}

const AgregarEvento: React.FC<AgregarEventoProps> = ({ onSave }) => {
  const [formValues, setFormValues] = useState<Omit<Evento, 'id_evento'>>({
    Titulo: '',
    Descripción: '',
    Fecha: '',
    Hora: '',
    id_usuario: 0,
    id_lugar: 0,
    id_categoria: 0,
  });

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [lugares, setLugares] = useState<Lugar[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [usuariosResponse, lugaresResponse, categoriasResponse] = await Promise.all([
          axios.get('http://localhost:3000/usuarios'),
          axios.get('http://localhost:3000/lugar'),
          axios.get('http://localhost:3000/categorias'),
        ]);

        console.log('Usuarios:', usuariosResponse.data);
        console.log('Lugares:', lugaresResponse.data);
        console.log('Categorías:', categoriasResponse.data);

        setUsuarios(usuariosResponse.data);
        setLugares(lugaresResponse.data);
        setCategorias(categoriasResponse.data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: id === 'id_usuario' || id === 'id_lugar' || id === 'id_categoria' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Titulo" className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          id="Titulo"
          value={formValues.Titulo}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Descripción" className="form-label">Descripción</label>
        <input
          type="text"
          className="form-control"
          id="Descripción"
          value={formValues.Descripción}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Fecha" className="form-label">Fecha</label>
        <input
          type="date"
          className="form-control"
          id="Fecha"
          value={formValues.Fecha}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Hora" className="form-label">Hora</label>
        <input
          type="time"
          className="form-control"
          id="Hora"
          value={formValues.Hora}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="id_usuario" className="form-label">Usuario</label>
        <select
          className="form-control"
          id="id_usuario"
          value={formValues.id_usuario}
          onChange={handleInputChange}
        >
          <option value={0}>Selecciona un usuario</option>
          {usuarios.map(usuario => (
            <option key={usuario.id_usuario} value={usuario.id_usuario}>
              {usuario.Nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="id_lugar" className="form-label">Lugar</label>
        <select
          className="form-control"
          id="id_lugar"
          value={formValues.id_lugar}
          onChange={handleInputChange}
        >
          <option value={0}>Selecciona un lugar</option>
          {lugares.map(lugar => (
            <option key={lugar.id_lugar} value={lugar.id_lugar}>
              {lugar.Nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="id_categoria" className="form-label">Categoría</label>
        <select
          className="form-control"
          id="id_categoria"
          value={formValues.id_categoria}
          onChange={handleInputChange}
        >
          <option value={0}>Selecciona una categoría</option>
          {categorias.map(categoria => (
            <option key={categoria.id_categoria} value={categoria.id_categoria}>
              {categoria.Nombre}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default AgregarEvento;
