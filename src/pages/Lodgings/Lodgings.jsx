import {React} from "react";
import Slideshow from "../../components/Slideshow/Slideshow"
import {useParams, Navigate} from "react-router-dom"
import fullStar from "../../components/Images/full-star.png"
import emptyStar from "../../components/Images/empty-star.png"
import lodgingCss from "../Lodgings/Lodgings.css"
import Accordioon from "../../components/Accodion/Accordion";
import { DataCrud } from "../../Data/DataCrud";



export default function Lodgings() {
  let {id} = useParams();
  const stars = [1, 2, 3, 4, 5];
  const lodging = DataCrud.getOneLodging(id);
 

  return (
    <>
    {lodging ? (
      <div className="container">
      
      <Slideshow key={lodging.pictures} slides={lodging.pictures}/>
     
      
          <section key="{Lodging.id}" className="cardInfos">
            <article className="lodgingInfos">
              
              <div className="locationInfos">
                <h1 key="{lodging.title}">{lodging.title}</h1>
                <p key="{lodging.location}">{lodging.location}</p>
              </div>
              
              <div>
                <ul className="lodgingTags">
                  {lodging.tags.map((tag) => (
                    <li className="lodgingTagItem" key={tag+lodging.id}> 
                      {tag} 
                    </li>
                    
                  ))}
                </ul>
              </div>

              
            </article>

            <article className="lodgingInfos_2">
              <div>
                <div className="hostInfos">
                  <p>{lodging.host.name}</p>
                  <img
                    src={lodging.host.picture}
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
                      key={star+lodging.id+index}
                      // opérateur conditionnel
                      src={index <= lodging.rating ? fullStar : emptyStar}
                      alt={star}
                    />

                  ))}
                </div>
              </div>
            </article>
          </section>

            <div className="accordions accordions_">
              
              <Accordioon title="Description" key={lodging.description} content={lodging.description} /> 

              <Accordioon key={lodging.equipments+lodging.id}
                title="Equipments" 
                content=  
                {lodging.equipments.map((infos, index) => (
                  <li key={`${lodging.equipments}-${index}`}>
                    {infos}
                  </li>
                ))}             
              />


            </div>  
    </div>
  
    ):(
      <Navigate replace to="/*" />
    )}
  </>
  )
}

        