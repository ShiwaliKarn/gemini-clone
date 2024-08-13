import './Sidebar.css'
import { IoMdMenu } from "react-icons/io";
import { BiPlus } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { GoQuestion } from "react-icons/go";
import { VscHistory } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";
import { useState } from 'react';

const Sidebar = () => {

    const [extended, setExtented] = useState(false);

    return (
        <div className='sidebar'>
            <div className="top">
                <IoMdMenu className='menu' onClick={()=>setExtented(prev=>!prev)} />
                <div className="new-chat">
                    <BiPlus />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">
                            Recent
                        </p>
                        <div className="recent-entry">
                            <FaRegMessage />
                            <p>What is react?....</p>
                        </div>
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