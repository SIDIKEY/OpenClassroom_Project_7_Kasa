import React, {useState, useEffect, useRef} from 'react'
import "../../components/Collapsible/Collapsible.css"
import Chevron from '../Images/Chevron.png'

export default function Collapsible ({src, title, alt, desc}) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState(false);

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const collapseState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="collapsible">

            <button 
            onClick={collapseState}
            className="collapsible-visible">
                <span>{title}</span>
                <img 
                className={toggle?  "open " : "undefined"}
                src={Chevron} 
                alt={alt}/>
            </button>
            
            <div 
            className={toggle ? "collapsible-toggle animated" : "collapsible-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    {desc}
                </p>
            </div>
            
        </div>
    )
}