import ImgBanner from "../Images/img_banner.png"
import _Banner from "../../styles/_Banner.css"

function Banner() {
  return (
      <section className= 'banner'>
        <div className='hero'>
            <img src={ImgBanner} alt="Image d'illustration d'une côte" className='img' />
            <h1 className='title'>Chez vous, partout et ailleurs</h1>
            
        </div>
      </section>
  )
}

export default Banner