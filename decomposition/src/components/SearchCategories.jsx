import SearchCategory from "./SearchCategory";
//категории поиска в блоке Поиск
export default function SearchCategories(props){
    return (
        <ul>
            {props.categories.map(category=>(
                <SearchCategory>{category}</SearchCategory>
            ))}
        </ul>
    )
}