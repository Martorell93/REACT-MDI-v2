import React from 'react'
import './Message.scss'

const Message = (props) => {

    const userClass = [
        "message_chat",
        props.user == "Johanna Doe" ? "user_chat" : ""
    ]

    return (
        <div className="message container_spaceB">
            <div className={userClass.join(" ")}>
                <div className="message_chat_header">
                    <img src={props.foto} alt="profile picture sender" className="message_sender_picture" />
    
                    <p className="message_sender_name">{props.user}</p>
                </div>
                <div className="message_chat_content">
                    {props.message}
                </div>
            </div>
            <p className="message_time">{props.time}</p>
        </div>
    )
}

export default Message
