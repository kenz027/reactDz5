import CardsList from "./components/CardsList"

const cardsInfo = [
  {title: 'Card title', descr: 'some description', img:'https://img.freepik.com/premium-photo/astral-wallpapers-composition-with-sea_23-2149687898.jpg?w=900', id:'1'},
  {title: 'Second type', descr: 'some description', id:'2'}
]
function App() {
  return <CardsList cardsInfoList={cardsInfo} />
}

export default App
