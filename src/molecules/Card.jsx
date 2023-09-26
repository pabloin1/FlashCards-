import { Parrafo } from "../atoms/Parrafo";
import { Title } from "../atoms/Title";
import { useState } from "react"; // Asegúrate de importar useState

export function Card({ title, text, id, onDelete }) {
  const [showParrafo, setShowParrafo] = useState(false); // Estado local para controlar la visibilidad del párrafo

  const handleDelete = () => {
    onDelete(id);
  };

  const toggleParrafo = () => {
    setShowParrafo(!showParrafo); // Invierte el estado de showParrafo al hacer clic en el botón
  };

  return (
    <div className="card">
      <Title title={title} />
      {showParrafo && <Parrafo text={text} />}
      <button className="btn-card" onClick={toggleParrafo}>{showParrafo ? 'Ocultar' : 'Mostrar'}</button>
      <button className="btn-card" onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

