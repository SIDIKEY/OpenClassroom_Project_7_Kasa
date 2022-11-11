import React from "react";
import { useState } from "react";
import "../Collapsible/Collapsible.css";
import arrow from '../Images/Chevron.png'

export default function Collapsible ({title, content, alt}) {

    const [clicked, setcliked] = useState(false)

    const tumble = () => {
        setcliked(!clicked)
    }

    console.log(clicked);

    return (
        <div className="wrapper">
            <div className="collapsible">
                <button onClick={tumble} className="collapseHeader">

                    <h2>{title}</h2>

                    <img 
                      className={tumble?  "active" : "undefined"}
                      src={arrow} 
                      alt={alt}
                    />

                </button>
                <div className="collaspeContent">
                    {content}
                </div>


            </div>
        </div>
    )
}

