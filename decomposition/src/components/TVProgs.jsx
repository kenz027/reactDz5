import TVProgram from "./TVProgram";
//компонент отображающий список тв программ 
export default function TVProgs(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.tvproglist.map(tvprog=>(
                    <TVProgram>{tvprog}</TVProgram>
                ))}
            </ul>
        </div>
    )
}