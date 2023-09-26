export function Button({ name, event, toggleParrafo }) {
  const handleClick = () => {
    if (toggleParrafo) {
      toggleParrafo(); // Llama a la función para mostrar/ocultar el párrafo
    }
    if (event) {
      event(); // Llama a la función proporcionada al componente Button
    }
  };

  return (
    <button className="btn" onClick={handleClick}>
      {name}
    </button>
  );
}

