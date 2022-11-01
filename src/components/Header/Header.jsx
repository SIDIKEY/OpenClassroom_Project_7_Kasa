import { Link } from 'react-router-dom'
import Logo from "../Images/Logo.svg"
import _Header from "../../styles/_Header.css"

 
function Header() {
    return (
        <header className= 'header'>
            <img src={Logo} alt="Logo Kasa" className='logo' />
            <nav className='nav'>
                <Link to="/" className='navhome'>
                   Accueil
                </Link>
                <Link to="/about" className='navabout'>
                   A Propos
                </Link>
            </nav>
      </header>
    )
}

export default Header