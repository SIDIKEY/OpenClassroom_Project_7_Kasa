import _Banner from "../../styles/_Banner.css"

function Banner({src, title, alt}) {
  return (
    <section className='banner'>
      <div className='hero'>
          <img
            src={src}
            alt={alt}
            className='img'
          />
          <h1 className='title_banner'>{title}</h1>
        
      </div>
    </section>
  )
}


export default Banner