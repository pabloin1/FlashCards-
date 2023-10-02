import { Form } from "./Form";
import "../css/styles.css";
import { Cards } from "./Cards";

export function Main({
  evento1,
  inputValues1,
  evento2,
  inputValues2,
  evento3,
  info,
  onDeleteCard,
}) {
  return (
    <div className="container">
      <Form
        evento1={evento1}
        inputValues1={inputValues1}
        evento2={evento2}
        inputValues2={inputValues2}
        evento3={evento3}
      />
      <Cards info={info} onDeleteCard={onDeleteCard} />
    </div>
  );
}
