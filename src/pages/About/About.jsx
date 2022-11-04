import React from "react";
import Banner from "../../components/Banner/Banner"
import ImgBannerAbout from "../../components/Images/img_banner_about.png"
import Collapsible from "../../components/Collapsible/Collapsible";


export default function About() {
    return (
      <div>
        <Banner src={ImgBannerAbout} title="" alt="Illustration d'une montagne" />
        <Collapsible/>
        <Collapsible/>
        <Collapsible/>
        <Collapsible/>

        
      </div>
    )
  }

