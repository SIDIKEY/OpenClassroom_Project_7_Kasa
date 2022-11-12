import React, {useState, useEffect, useRef} from 'react'
import "../../styles/_Accordion.css"
import Chevron from '../Images/Chevron.png'

export default function Accordion({title, alt, desc}) {

    const [toggle, setToggle] = useState(0)
    const [heightEl, setHeightEl] = useState(0);

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
                className={toggle && "active"}
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