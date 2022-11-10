import _Error from "../../styles/_Error.css"
import { Link } from "react-router-dom"

function Error() {

  return (
    <div className='sizing'>
        <div className='notfound'>404</div>
        <div className='text'>Oups! La page que vous demandez n'existe pas.</div>
        <Link to="/" className='goback'>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error