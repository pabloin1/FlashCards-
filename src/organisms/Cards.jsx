import { Card } from "../molecules/Card";

export function Cards({ info, onDeleteCard }) {
  return (
    <div className="containerCards">
      {info.map((e, i) => {
        const cardClass = i >= 2 ? "botton1" : "";
        const cardClass2 = i >= 2 ? "botton2" : "";

        return (
          <Card
            title={e.title}
            text={e.text}
            id={e.id}
            key={e.id}
            onDelete={onDeleteCard}
            cardClass={cardClass} 
            cardClass2 = {cardClass2}
          />
        );
      })}
    </div>
  );
}
