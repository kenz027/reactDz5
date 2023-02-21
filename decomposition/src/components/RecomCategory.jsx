//компонент оболочка для категории из блока Посещаемое
export default function RecomCategory({children}){
    const childrenProps = children.props;
    return (
        <li>
            <span>
                <br>{childrenProps.title}</br> - <p>{childrenProps.category}</p>
            </span>
        </li>
    )
}