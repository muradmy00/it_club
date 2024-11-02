import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setHVideo }) => {

  return (

    <div className='about'>



        <div className="about-left">

          <img src={about_img} alt="" className='about-img' />  
          <img onClick={()=>{setHVideo(true)}} src={play_icon} alt="" className='play-img' />  

        </div>




        <div className="about-right">

        <h3>ABOUT</h3>
        <h2>BUBT IT Club</h2>
        
        <p>BUBT IT Club’s distinction as the “largest and most active
          club” at BUBT.</p>

        <p>Timeline feature showcasing 13 years of achievements and milestones.</p>

        <p>Add an interactive “Meet the Team” with bios of executive
          members, emphasizing their role in organizing all CSE department events.</p>


        </div>
      
    </div>
  )
}

export default About
