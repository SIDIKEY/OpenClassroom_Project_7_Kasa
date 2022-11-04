import React, {useState} from "react"



function Collapsible() {
    const [isOpen, setIsOpen] = useState(false)
    return <div className="collapsible">
        <button className="toggle" onClick={() =>setIsOpen(!isOpen)}>Toggle</button>
        {isOpen &&  <div className="content">some content</div>}
    </div>
    

}
export default Collapsible