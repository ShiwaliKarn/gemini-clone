import './Main.css'
import { FiMessageSquare } from "react-icons/fi";
import { ImCompass2 } from "react-icons/im";
import { IoBulbOutline, IoCodeSlashOutline } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { MdOutlineMicNone } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { useContext } from 'react';
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSent();
    }
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src="/profileIcon.png" alt="Profile Icon" />
      </div>
      <div className='main-container'>
        {!showResult
          ? <>
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
          </>
          :
          <div className='result'>
            <div className="result-title">
              <img src="/profileIcon.png" alt="profile icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src="/favicon.png" alt="Gemini icon" style={{ width: "35px",marginTop:"-2px" }} className={loading ? 'rotate' : ''} />
              {loading ?
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' onKeyDown={handleKeyDown} />
            <div>
              <RiImageAddLine />
              <MdOutlineMicNone />
              <VscSend onClick={() => onSent()} />
            </div>

          </div>
          <p className='bottom-info'>
            Gemini may display inaccurate info, including about people, so double-check its responses. <span style={{ textDecoration: "underline", cursor: "pointer" }}>Your privacy and Gemini Apps</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main