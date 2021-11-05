import React from 'react'
import Category from '../Category/Category'
import Messages from './Messages'
import { chats } from '../../models/chats'
import './Chats.scss'

const Chats = () => {
    const Openchat = () => {
        chats.open = true;
    }

    return (
        <div className="chats">
            <div className="chats_header display_center">
                <h2 className="chats_title">CHATS</h2>
                <Category />
            </div>
            <div className="chats_content">
                {
                    chats.map((chats_, i) => (
                        <Messages key={i} title={chats_.title}
                        muted={chats_.muted} pinned={chats_.pinned}
                        participants={chats_.participants} 
                        category={chats_.category}
                        lastChanged={chats_.lastChanged}
                        recived={chats_.recived} Openchat={Openchat()} />
                    ))
                }
            </div>
        </div>
    )
}

export default Chats
