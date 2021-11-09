import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faThumbtack, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import './Messages.scss'

const Messages = (props) => {

    const mutedButtonClass = [
        "button",
        props.muted ? "muted container_center" : "container_center",
    ]
    const pinnedButtonClass = [
        "button",
        props.pinned ? "pinned" : ""
    ]
    const caseClass = [
        "case container_spaceB",
        props.muted ? "muted" : "",
        props.pinned ? "pinned" : ""
    ]

    const openClass = [
        props.open ? 'open' : '',
    ]

    return (
        <a href="#" className={`${openClass} chat_info`}><li>
            <header className="chat_header container_spaceB">
                <div className="chat_title">
                    {props.recived ? 
                    <p className="recived">{props.title}</p>
                    :
                    <p className="">{props.title}</p>
                    }               
                </div>
                <div className="chat_right container_center">
                    <button className={mutedButtonClass.join(" ")}>
                    {
                        props.muted && props.open ?
                        <div className="muted_true_open">
                            <FontAwesomeIcon icon={faVolumeUp} className='icon_muted_open'/>
                            {/* <FontAwesomeIcon icon={faSlash} className='slash slash_muted'/> */}
                        </div>
                        :
                        props.muted ?
                        <div className="muted_true">
                            <FontAwesomeIcon icon={faVolumeUp} className='icon_muted'/>
                            {/* <FontAwesomeIcon icon={faSlash} className='slash slash_muted'/> */}
                        </div>
                        :
                        <div className="muted_false">
                            <FontAwesomeIcon icon={faVolumeUp} className='icon_no_muted'/>
                            {/* <FontAwesomeIcon icon={faSlash} className='slash slash_no_muted'/> */}
                        </div>
                        
                    }   
                    </button>
                    <button className={pinnedButtonClass.join(" ")}>
                        {
                            props.pinned && props.open ?
                            <FontAwesomeIcon icon={faThumbtack} className='thumbtack icon_open'/>
                            :
                            props.pinned ?
                            <FontAwesomeIcon icon={faThumbtack} className='thumbtack icon_pinned'/>
                            :
                            <FontAwesomeIcon icon={faThumbtack} className='thumbtack icon_no_pinned'/>
                        }
                    </button>
                </div>
            </header>
            <div className="chat_content container_spaceB">
                <div className='chat_content_left'>
                    {
                        props.participants.map((chat_img, i) => (
                            <div className="contact_image">
                                <img key={i} src={chat_img} alt="contact image" className={i}/>
                            </div>
                        ))
                    }
                </div>
                <div className="chat_content_right container_center">
                    <div className="chat_category container_center">
                        {
                            props.category.map((chat_category, i) => (
                                <div className={chat_category}>
                                    <FontAwesomeIcon key={i} icon={faCircle} className='category_dots' />
                                </div>
                            ))
                        }
                    </div>
                    <div className="chat_date">
                        <p>{props.lastChanged}</p>
                    </div>
                </div>
            </div>
        </li></a>
    )
}

export default Messages
