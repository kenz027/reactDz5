import LiveProg from "./LiveProg";

//компонент со списком программ из блока Эфир
export default function LiveProgs(props){  
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.liveProgsList.map(liveProg=>(
                    <LiveProg>{liveProg}</LiveProg>
                ))}
            </ul>
        </div>
    )
}