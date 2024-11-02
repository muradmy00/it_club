import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {


  return (


    <div className='hero container'>
      
      <div className="hero-text">

        <h1>Organizing all CSE events at BUBT for 13 Years of Glory.</h1>
        <br />
        <button className='btn'>Recent Events <img src={dark_arrow} alt="" /> </button>
        &nbsp;&nbsp;
        <button className='btn'>Past Events <img src={dark_arrow} alt="" /> </button>
        
      </div>

    </div>
  )
}

export default Hero
