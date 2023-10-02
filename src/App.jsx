import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./organisms/Header";
import { Main } from "./organisms/Main";
import { evalueCard } from "./js/evalueCar";

function App() {
  const [info, setInfo] = useState([]);

  const [title, setTitle] = useState("");
  const eventTitle = (event) => {
    setTitle(event.target.value);
  };

  const [text, setText] = useState("");
  const evenText = (event) => {
    setText(event.target.value);
  };

  const createCard = () => {
    if (evalueCard(title, text)) {
      const carta = {
        id: Date.now(), // Usamos la marca de tiempo actual como identificador único
        title,
        text,
      };
      const newInfo = [...info, carta];
      setInfo(newInfo);
    }
  };

  // ...

  const deleteCard = (id) => {
    const updatedInfo = info.filter((card) => card.id !== id);
    setInfo(updatedInfo);
  };

  return (
    <>
      <>
        <Header />
        <Main
          inputValues1={title}
          inputValues2={text}
          evento1={eventTitle}
          evento2={evenText}
          evento3={createCard}
          info={info}
          onDeleteCard={deleteCard}
        />
      </>
    </>
  );
}

export default App;
