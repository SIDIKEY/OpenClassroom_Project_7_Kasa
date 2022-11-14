import React, { useState } from "react"
import { useParams } from "react-router-dom"
import leftArrow from "../../components/Images/left-arrow.svg";
import rightArrow from "../../components/Images/right-arrow.svg";
import "../../styles/Slideshow.css"
import PropTypes from 'prop-types'

export default function Slideshow({slides}) {
 
  const params = useParams();
  const [currentIndex, setcurrentIndex] = useState(0);

  const goToNext = (length) => {
    setcurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = (length) => {
    
    setcurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };
  return (
    <>
      
        <section  className="slider">
          {slides.length > 1 ? (
            <>
              <img
                src={leftArrow}
                alt="go to the previous slide"
                className="left_arrow"
                onClick={goToPrevious}
              />
              <img
                src={rightArrow}
                alt="go to the next slide"
                className="right_arrow"
                onClick={goToNext}
              />
            </>
          ) : (
            ""
          )}
          
           
              <article
                className= "slide active"
                key={slides}
              >
              
                  <img
                    src={slides[currentIndex]}
                    alt="lodging slider img"
                    className="lodgingImage"
                  />
                
              </article>
            
          
          <p className="slide_rooms">
            {`${currentIndex + 1}`}/{`${slides.length}`}{" "}
          </p>
        </section>
      
    </>
  );
}

Slideshow.propTypes= { 
  slides: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}
