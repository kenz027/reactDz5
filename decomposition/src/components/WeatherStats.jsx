import WeatherStat from "./WeatherStat";
//компонент со списком статистики погоды
export default function WeatherStats(props){
    return (
        <ul>
            {props.weatherstats.map(weatherStat=>(
                <WeatherStat>{weatherStat}</WeatherStat>
            ))}
        </ul>
    )
}