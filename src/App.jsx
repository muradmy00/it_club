import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import EventsPage from "./Components/EventsPage/EventsPage"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"


const App = () => {

  const [hVideo,setHVideo] = useState(false);



  return (

    <div>

      <Navbar/>
      <Hero/>
      <div className="container">
       
        <Title text1='Events Page' text2='What event do we organize'/>
        <EventsPage />


        <About setHVideo={setHVideo}/>

        <Title tle text1='Gallery' text2='Event Images' />
      <Campus/>

        <Title text1='Membership' text2='Membership Benefits & Impact' />
      <Testimonials />

      <Title text1='Contact Us' text2='Get in Touch' />
      <Contact/>

      <Footer />

      </div>

      <VideoPlayer hVideo={hVideo} setHVideo={setHVideo}/>

    
      
    </div>
  )
}

export default App
