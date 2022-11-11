import React from 'react';
import { useState } from 'react';
import down_arrow_icon from '../../components/Images/Chevron.png';
import _Accordion from "./Accordion.css"


function Accordioon({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return isOpen ? (
      <div className="accordeon">
        <div className="accordeon_header" onClick={() => setIsOpen(false)} >
          <h2>
            {title}
          </h2>
          <img src={down_arrow_icon} className="icone_ouverte"/>
        </div>
        <div className="accordeon_content">
          {content}
        </div>
      </div>
      
    ) : (
      <div className={_Accordion.accordion}>
          <div className="accordeon_header" onClick={() => setIsOpen(true)}>
             {title}
            <img src={down_arrow_icon} className="icone"/>
          </div>
      </div>
    )
  }
  
  export default Accordioon
  