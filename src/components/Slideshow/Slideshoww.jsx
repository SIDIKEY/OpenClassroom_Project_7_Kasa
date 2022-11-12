import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { Data } from "../../Data/Data"
import leftArrow from "../../components/Images/left-arrow.svg";
import rightArrow from "../../components/Images/right-arrow.svg";
import "../../styles/Slideshow.css"


export default function Slideshow() {
  // A hook who allows us to display data for every differnt ID inside the JSON File
  const params = useParams();
  const [currentIndex, setcurrentIndex] = useState(0);

  const goToNext = (length) => {
    setcurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = (length) => {
    
    setcurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };
  return (
    <>
      {Data.filter((Lodging) => Lodging.id === params.id).map((Lodging, index) => (
        <section key={index} className="slider">
          {Lodging.pictures.length > 1 ? (
            <>
              <img
                src={leftArrow}
                alt="go to the previous slide"
                className="left_arrow"
                onClick={() => goToPrevious(Lodging.pictures.length)}
              />
              <img
                src={rightArrow}
                alt="go to the next slide"
                className="right_arrow"
                onClick={() => goToNext(Lodging.pictures.length)}
              />
            </>
          ) : (
            ""
          )}
          {Lodging.pictures.map((image, index) => {
            return (
              <article
                className={index === currentIndex ? "slide active" : "slide"}
                key={index}
              >
                
                {index === currentIndex && (
                  <img
                    src={image}
                    alt="lodging slider img"
                    className="lodgingImage"
                  />
                )}
              </article>
            );
          })}
          <p className="slide_rooms">
            {`${currentIndex + 1}`}/{`${Lodging.pictures.length}`}{" "}
          </p>
        </section>
      ))}
    </>
  );
}