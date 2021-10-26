import React from 'react'

const Message = (props) => {
    return (
        <div className="message">
            <div className="message_chat">
                <div className="message_chat_header">
                    <img src="" alt="profile picture sender" className="message_sender_picture" />
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
