export function Input({ inputValue, evento, name }) {
  return (
    <input
      className="inpt"
      type="text"
      value={inputValue}
      onChange={evento}
      placeholder={name}
    />
  );
}
