import React from 'react'
import Message from './Message/Message'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './OpenChat.scss'

const Openchat = (props) => {
    return (
        <section className="open_chat">
            <header className="chat_header">
                <div className="chat_header_top">
                    <h3 className="chat_title">{props.title.toUpperCase()}</h3>
                    <div className="chat_category container_center">
                            {
                                props.category.map((chat_category, i) => (
                                    <div className={chat_category}>
                                        <FontAwesomeIcon key={i} icon={faCircle} className='category_dots' />
                                    </div>
                                ))
                            }
                        </div>
                </div>
                <div className="chat_header_low">
                    {
                        props.participants.map((chat_img, i) => (
                            <div className="contact_image">
                                <img key={i} src={chat_img} alt="contact image" className={i}/>
                            </div>
                        ))
                    }
                </div>
            </header>
            <article className="chat_content">
                {
                    props.history.map((history_, i) => (
                        <Message key={i} user={history_.user}
                        message={history_.message}
                        time={history_.time} foto={history_.foto}/>
                    ))
                }
            </article>
            <footer className="chat_footer container_spaceB">
                <div className="chat_footer_left">
                <input type="text" className="chat_new_message" placeholder="Escribir mensaje..."/>
                </div>
                <button className="button chat_send_message">Enviar</button>
            </footer>
        </section>
    )
}

export default Openchat
