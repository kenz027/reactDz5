//компонент с первым рекламным баннером сверху справа от поиска
export default function PromoteBanner(props) {
    return (
    <div>
      <img src={props.img} />
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>
  );
}
