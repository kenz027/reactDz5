export default function Card(props){
    const {children} = props;
    return (
        <li className="card" key={props.id}>
            {children.img && <img src={children.img} alt=''/>}
            <h2 className="card__title">{children.title}</h2>
            <p className="card__descr">{children.descr}</p>
            <a className="card__refbutton">Go somewhere</a>
        </li>
    )
}