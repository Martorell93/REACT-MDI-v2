import React from 'react'

const Messages = (props) => {
    return (
        <div>
            <div className="chat_header">
                <div className="chat_title">
                    {props.recived ? 
                    <h3 className="">{props.title}</h3>
                    :
                    <p className="">{props.title}</p>
                    }               
                </div>
                <div className="chat_muted">
                    {props.muted ? "Muted" : "Unmuted"}
                </div>
                <div className="chat_pinned">
                    {props.pinned ? "Pinned" : "Unpinned"}
                </div>
            </div>
            <div className="chat_content">
                <div></div>
            </div>
        </div>
    )
}

export default Messages
