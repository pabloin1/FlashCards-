import { Card } from "../molecules/Card";

export function Cards({ info, onDeleteCard }) {
  return (
    <div className="containerCards">
      {info.map((e) => {
        return <Card title={e.title} text={e.text} id={e.id} key={e.id} onDelete={onDeleteCard} />;
      })}
    </div>
  );
}


  
