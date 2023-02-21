import { useState } from "react"
import ActionButtons from "./ActionButtons";

export default function Collapse(props){
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className="collapse">
            <ActionButtons setIsCollapsed={setIsCollapsed} />
            <p className={isCollapsed ? 'text-content show' : 'text-content'}>121212</p>
        </div>
    )
}