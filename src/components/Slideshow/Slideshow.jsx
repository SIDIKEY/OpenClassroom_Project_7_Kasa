import {React} from "react";
import Slideshow from "../../components/Slideshow/slideshowTest"
import { Navigate, useParams} from "react-router-dom"
import { Data } from "../../Data/Data"
import Lodgingcss from "../Lodgings/Lodgings.css"
import fullStar from "../../components/Images/full-star.png"
import emptyStar from "../../components/Images/empty-star.png"
import Accordion from "../../components/Accordion/Accordion"
import Collapsible from "../../components/Collapsible/Collapsible"



export default function Lodgings() {
  const params = useParams();
  const stars = [1, 2, 3, 4, 5];
  const lodging = Data;
 

  return (
    <>
    {lodging ? (
    
    <div className="container">
      
      <Slideshow key="{Lodging.pictures}"/>
     
      {Data.filter((Lodging) => Lodging.id === params.id).map((Lodging) => (
          <section key="{Lodging.id}" className="cardInfos">
            <article className={Lodgingcss.lodgingInfos}>
              
              <div className="locationInfos">
                <h1 key="{Lodging.title}">{Lodging.title}</h1>
                <p key="{Lodging.location}">{Lodging.location}</p>
              </div>
              
              <div>
                <ul className="lodgingTags">
                  {Lodging.tags.map((tag) => (
                    <li className="lodgingTagItem" key={tag+Lodging.id}> 
                      {tag} 
                    </li>
                    
                  ))}
                </ul>
              </div>

              
            </article>

            <article className="lodgingInfos_2">
              <div>
                <div className="hostInfos">
                  <p>{Lodging.host.name}</p>
                  <img
                    src={Lodging.host.picture}
                    alt="the host"
                    className = "hostPicture"
                  />
                </div>
              </div>

              <div>
                <div className="starsList">
                  {stars.map((star, index) => (
                    <img
                      
                      className="star"
                      key={star+Lodging.id+index}
                      // opérateur conditionnel
                      src={index <= Lodging.rating ? fullStar : emptyStar}
                      alt={star}
                    />
                  ))}
                </div>
              </div>
            </article>
           

          </section>
      ))}

      {Data.filter((Lodging) => Lodging.id === params.id).map((Lodging) => (
            <div className="accordions accordions_">
              <Accordion title="Description" key={Lodging.description+Lodging.id} desc={Lodging.description} />
              <Collapsible
                key={Lodging.equipments+Lodging.id}
                title="Equipments" 
                desc={Lodging.equipments.map((info) => (    
                    <div key={info+Lodging.id+Lodging.equipments}>
                      {info}
                    </div>
                ))}
                
              />
            </div>
      ))}
     
    </div>
    ) : (
      <Navigate replace to="/*" />
    )}
  </>
  )
}

        