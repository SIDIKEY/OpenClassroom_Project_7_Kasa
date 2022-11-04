import React from "react";
import Banner from "../../components/Banner/Banner"
import Cards from "../../components/Cards/Cards"
import ImgBannerHome from "../../components/Images/img_banner_home.png"


export default function Home() {
    return (
        <body>
           <Banner src={ImgBannerHome} title={"Chez vous, partout et ailleurs"} />
           <Cards />
        </body>
    )
}