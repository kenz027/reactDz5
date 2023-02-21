//компонент оболочка для вывода курса валюты
export default function Currency({children}){
    const childrenProps = children.props;
    return (
        <li>
            <span>{childrenProps.currencyCode}</span>
            <span>{childrenProps.stockMarket}</span>
            <span>{childrenProps.rate}</span>
            <span>{childrenProps.childrenProps.changeRate}</span>
        </li>
    )
}