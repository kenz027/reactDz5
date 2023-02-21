
export default function CountryMap(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.list.map(e=><li>{e.title}</li>)}
            </ul>
        </div>
    )
}