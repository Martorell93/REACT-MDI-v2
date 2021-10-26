import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { contacts } from '../../models/contacts'

const Connected = () => {
    return (
        <div className="chats">
            <div className="chats_header container_center">
                <h2 className="chats_title">CONNECTED</h2>
                <button className="add_chat">
                    <FontAwesomeIcon icon={faPlus} className='add'/>
                </button>
            </div>
            <div className="chats_contacts">
                <div className="contacts_content">
                    {
                        contacts.map((contacts_, i) => (
                            <div key={i} name={contacts_.name} connected={contacts_.connected} foto={contacts_.foto} className='contact container_spaceB'>
                                <div className="contact_right container_center">
                                    <img src={contacts_.foto} alt="contact image" className="contact_image"/>
                                    <p className="contact_name">{contacts_.name}</p>
                                </div>
                                <div className="contact_left">
                                {
                                    contacts_.connected ?
                                        <div className={contacts_.connected}>
                                            <FontAwesomeIcon icon={faCircle} className='category_dots'/>
                                        </div>
                                        : null
                                }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Connected
