import React from "react";
import Banner from "../../components/Banner/Banner"
import ImgBannerAbout from "../../components/Images/img_banner_about.png"
import Aboutcss from "../About/About.css"
import Chevron from '../../components/Images/Chevron.png'

import Accordion from "../../components/Accordion/Accordion"


export default function About() {
    return (
      <div>
        <Banner src={ImgBannerAbout} title="" alt="Illustration d'une montagne" />
        <div className="accordions">
            
            <Accordion title="Fiabilité" src={Chevron} desc="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
              conformes aux logements, et toutes les informations sont régulièrement vérifiées
              par nos équipes"
            />

            <Accordion title="Respect" desc="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
              discriminatoire ou de perturbation du voisinage entraînera une exclusion de
              notre plateforme."
            />

            <Accordion title="Service" desc="Nos équipes se tiennent à votre disposition pour vous fournir une expérience
              parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
            />

            <Accordion title="Sécurité" desc="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les
              voyageurs, chaque logement correspond aux critères de sécurité établis par nos
              services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à
              nos équipes de vérifier que les standards sont bien respectés. Nous organisons
              également des ateliers sur la sécurité domestique pour nos hôtes."
            />
              
            
        </div>
       
        
        
      </div>
    )
  }

