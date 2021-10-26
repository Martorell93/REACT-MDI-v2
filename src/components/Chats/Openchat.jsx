import React from 'react'
import Message from './Message'

const Openchat = (props) => {
    return (
        <div className="open_chat">
            <div className="chat_header_top">
                <h3 className="chat_title">{props.title.toUpperCase()}</h3>
                <div className="chat_category">{props.category.join(" ")}</div>
            </div>
            <div className="chat_header_low">
                <div className="chat_participants">{props.participants.join(" ")}</div>
            </div>
            <div className="chat_content">
                {
                    props.history.map((history_, i) => (
                        <Message key={i} user={history_.user}
                        message={history_.message}
                        time={history_.time}/>
                    ))
                }
                {props.history.time}
            </div>
            <div className="chat_footer">
                <input type="text" className="chat_new_message" placeholder="Escribir mensaje..."/>
                <button className="chat_send_message">Enviar</button>
            </div>
        </div>
    )
}

export default Openchat
