//компонент оболочка отображающий показатель погоды
export default function WeatherStat({children}){
    const childrenProps = children.props;

    return (
        <li>
            <img src={childrenProps.weatherImg} />
            <p>{childrenProps.stat}</p>
        </li>
    )
}