import { useState } from "react"
import Lodgings from "../../lodgings.json"
import _Cards from "../../styles/_Cards.css"
import { Link } from "react-router-dom"

function Card() {
    const [lodgings] = useState(Lodgings)
  
    return (
      <div className='cards_BG'>
        {lodgings.map((lodging) => (
            <Link to={`/lodgings/${lodging.id}`} key={lodging.id}>
                <div key={lodging.id} className='card'>
                    <img
                      src={lodging.cover}
                      alt={lodging.title}
                      className='card_img'
                    />
                    <div className='title'>{lodging.title}</div>
                </div>
            </Link>

            
        ))}
      </div>
    )
  }

  export default Card