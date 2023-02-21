import RecomCategory from "./RecomCategory";
//компонент со списком блока Посещаемое
export default function RecomCategories(props) {
  return (
    <div>
      <h2></h2>
      <ul>
        {props.recomCategories.map((recomCategory) => (
          <RecomCategory>{recomCategory}</RecomCategory>
        ))}
      </ul>
    </div>
  );
}
