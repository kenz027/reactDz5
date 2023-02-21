export default function ActionButtons(props){
    return (
        <>
            <button onClick={()=>props.setIsCollapsed(true)}>{props.collapsedLabel}</button>
            <button onClick={()=>props.setIsCollapsed(false)}>{props.expandedLabel}</button>
        </>
    )
}
ActionButtons.defaultProps = {
    collapsedLabel: 'Развернуть',
    expandedLabel: 'Свернуть',
}