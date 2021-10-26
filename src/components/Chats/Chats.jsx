import React from 'react'
import Category from '../Category/Category'
import Messages from './Messages'
import { chats } from '../../models/chats'

const Chats = () => {
    return (
        <div className="chats">
            <div className="chats_header">
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
                        recived={chats_.recived} />
                    ))
                }
            </div>
        </div>
    )
}

export default Chats
