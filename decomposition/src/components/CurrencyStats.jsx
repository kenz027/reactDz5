import Currency from "./Currency";
//компонент со списком курсов валют
export default function CurrencyStats(props){
    return (
        <ul>
            {props.currencies.map(currency=>(
                <Currency>{currency}</Currency>
            ))}
        </ul>
    )
}