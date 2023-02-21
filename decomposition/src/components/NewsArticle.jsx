//компонент оболочка для вывода названия статьи
export default function NewsArticle({children}){
    const childrenProps = children.props;
    return (
        <li>
            <span>{childrenProps.icon}</span>
            <h2>{childrenProps.articleTitle}</h2>
        </li>
    )
}