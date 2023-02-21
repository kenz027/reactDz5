import Card from "./Card";

export default function CardsList(props) {
  const {cardsInfoList} = props;
    return (
    <ul className="cards-list">
      {cardsInfoList.map((cardInfo, i) => (
        <Card {...props} key={`c${i}`}>{cardInfo}</Card>
      ))}
    </ul>
  );
}
