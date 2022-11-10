import React from "react";
import LogoFooter from "../Images/logo-footer.png"
import Footercss from "../Footer/Footer.css"




export default function Footer() {
    return (
        <footer className="footer">
        <img src={LogoFooter} alt="Logo de Kasa du footer" className="logoFooter" />
        <p className="text">
            © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
  }