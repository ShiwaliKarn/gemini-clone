import './Sidebar.css'
import { IoMdMenu } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { VscHistory } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';


const Sidebar = () => {

    const [extended, setExtented] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

const loadPrompt = async (prompt) =>{
    setRecentPrompt(prompt);
    await onSent(prompt);
}

    return (
        <div className='sidebar'>
            <div className="top">
                <IoMdMenu className='menu' onClick={() => setExtented(prev => !prev)} />
                <div className="new-chat" onClick={()=>newChat()}>
                    <BiPlus />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">
                            Recent
                        </p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div className="recent-entry" onClick={()=>loadPrompt(item)}>
                                    <FaRegMessage />
                                    <p>{item.slice(0,18)}...</p>
                                </div>
                            )
                        })}

                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <GoQuestion />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <VscHistory />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <MdOutlineSettings />
                    {extended ? <p>Settings</p> : null}
                </div>

            </div>
        </div>
    )
}

export default Sidebar