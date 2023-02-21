import NewsArticle from "./NewsArticle";
//компонент с выводом всех статей
export default function NewsArticles(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
            {props.newsArticles.map(article=>(
                <NewsArticle>
                    {article}
                </NewsArticle>
            ))}
        </ul>
        </div>
    )
}