//компонент оболочка для названия программы из блока Эфир
export default function LiveProg({children}){
    const childrenProps = children.props;
    return (
        <li>
            <span><img src={childrenProps.img}/></span>
            <span>{childrenProps.title}</span>
            <span>{childrenProps.tvChannelTitle}</span>
        </li>
    )
}