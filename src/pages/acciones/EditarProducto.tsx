import React, { useState, useEffect } from 'react';

interface EditarProductoProps {
  producto: {
    id_evento: number;
    Titulo: string;
    Descripción: string;
    id_usuario: number;
    id_lugar: number;
    id_categoria: number;
  };
  onSave: (updatedProducto: any) => void;
}

const EditarProducto: React.FC<EditarProductoProps> = ({ producto, onSave }) => {
  const [formValues, setFormValues] = useState(producto);

  useEffect(() => {
    setFormValues(producto);
  }, [producto]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Titulo" className="form-label">Título</label>
        <input type="text" className="form-control" id="Titulo" value={formValues.Titulo} onChange={handleInputChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="Descripción" className="form-label">Descripción</label>
        <input type="text" className="form-control" id="Descripción" value={formValues.Descripción} onChange={handleInputChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="id_usuario" className="form-label">ID Usuario</label>
        <input type="number" className="form-control" id="id_usuario" value={formValues.id_usuario} onChange={handleInputChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="id_lugar" className="form-label">ID Lugar</label>
        <input type="number" className="form-control" id="id_lugar" value={formValues.id_lugar} onChange={handleInputChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="id_categoria" className="form-label">ID Categoría</label>
        <input type="number" className="form-control" id="id_categoria" value={formValues.id_categoria} onChange={handleInputChange} />
      </div>

      <button type="submit" className="btn btn-primary">Guardar</button>
    </form>
  );
};

export default EditarProducto;
