import './Main.css'
import { FiMessageSquare } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { IoBulbOutline, IoCodeSlashOutline } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { MdOutlineMicNone } from "react-icons/md";
import { VscSend } from "react-icons/vsc";

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src="/assets/profileIcon.png" alt="Profile Icon" />
      </div>
      <div className='main-container'>
        <div className="greet">
          <p><span>Hello, Shiwali</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see for an upcoming road trip.</p>
            <ImCompass2 />
          </div>
          <div className="card">
            <p>Briefly summerize this concept: urban planning.</p>
            <IoBulbOutline />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our work retreat.</p>
            <FiMessageSquare />
          </div>
          <div className="card">
            <p>Improve the readability of the following code.</p>
            <IoCodeSlashOutline />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter a prompt here' />
            <div>
            <RiImageAddLine />
            <MdOutlineMicNone />
            <VscSend />
            </div>

          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. <span style={{textDecoration:"underline",cursor:"pointer"}}>Your privacy and Gemini Apps</span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main