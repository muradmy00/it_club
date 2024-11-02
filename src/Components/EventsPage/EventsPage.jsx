import './EventsPage.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import white_arrow from '../../assets/white-arrow.png'

const EventsPage = () => {
  return (
    <div className='programs' id='program'>

      <div className='program'>
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>ICPC Contest</p>
        </div>
      </div>

      <div className='program'>
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Inter University Contest</p>
        </div>
      </div>

      <div className='program'>
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>National IT Competition</p>
        </div>
      </div>

      {/* Button added here */}
      <button className="program-button">See More <img src={white_arrow} alt="" /> </button>

    </div>
  )
}

export default EventsPage
