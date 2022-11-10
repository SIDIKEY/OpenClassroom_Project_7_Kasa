import React, {useState, useEffect, useRef} from 'react'
import "../../styles/_Accordion.css"
import Chevron from '../Images/Chevron.png'

export default function Accordion({src, title, alt, desc}) {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState(false);

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>{title}</span>
                <img 
                className={toggle?  "active" : "undefined"}
                src={Chevron} 
                alt={alt}/>
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
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