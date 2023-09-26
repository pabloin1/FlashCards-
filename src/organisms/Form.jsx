import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Title } from "../atoms/Title";

export function Form({ evento1, inputValues1, evento2, inputValues2, evento3 }) {
  return (
    <div className="form inputs">
      <Title title='Crea tus cartas' />

      <Input
        name={"Ingrese el título"}
        evento={evento1}
        inputValue={inputValues1}
      />
      <Input
        name={"Ingrese el texto"}
        evento={evento2}
        inputValue={inputValues2}
      />

      <Button name={'Crear'} event={evento3}/>
    </div>
  );
}
