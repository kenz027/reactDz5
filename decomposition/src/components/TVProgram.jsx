//компонент оболочка для названия тв программы из блока Телепрограммы
export default function TVProgram({children}){
    const {childrenProps} = children.props;
    
    return (
        <li>
            <span>{childrenProps.startTime}</span>
            <span>{childrenProps.tvTitle}</span>
            <span>{childrenProps.channelName}</span>
        </li>
    )
}