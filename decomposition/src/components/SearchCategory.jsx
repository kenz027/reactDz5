export default function SearchCategory({childred}){
    const childrenProps = childred.props;
    return (
        <li>
            <a>{childrenProps.category}</a>
        </li>
    )
}