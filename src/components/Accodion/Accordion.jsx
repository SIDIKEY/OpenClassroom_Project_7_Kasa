import React from 'react';
import { useState } from 'react';
import down_arrow_icon from '../../components/Images/Chevron.png';
import _Accordion from "./Accordion.css"
import PropTypes from 'prop-types'


function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
  
    return isOpen ? (
      <div className="accordeon">
        <div className="accordeon_header" onClick={() => setIsOpen(false)} >
          <h2>
            {title}
          </h2>
          <img src={down_arrow_icon} className="icone_ouverte" alt="arrow open"/>
        </div>
        <div className="accordeon_content">
          <ul aria-hidden="false">
            {content}
          </ul>
        </div>
      </div>
      
    ) : (
      <div className="accordeon">
          <div className="accordeon_header" onClick={() => setIsOpen(true)}>
            <h2>
              {title}
            </h2>
            <img src={down_arrow_icon} className="icone" alt="arrow closed"/>
          </div>
          <div className="accordeon_content_hidden" aria-hidden="true">
            <ul aria-hidden="true">
              {content}
            </ul>
          </div>
      </div>
    )
  }
  
  export default Accordion

  Accordion.propTypes= {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  }
  