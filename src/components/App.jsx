import React from 'react'
import Header from './Header/Header'
import "./Content.scss"
import Cases from './Cases/Cases'
import Connected from './Connected/Connected'
import Chats from './Chats/Chats'
import { chats } from '../models/chats'
import Openchat from './Chats/OpenChat/Openchat'

const App = () => {


  return (
    <div className='todo'>
      <div className='header'>
        <Header />
      </div>
      <div className="content container">
        <div className="content_left">
          <Cases />
        </div>
        <div className="content_left_low">
            <Connected />
        </div>
        <div className="content_right">
          <Chats />
        </div>
        <div className="messages">
        {
            chats.map((chat_, i) => (
              (chat_.open) ?
                <Openchat key={i}
                  title={chat_.title} category={chat_.category}
                  participants={chat_.participants} history={chat_.history} />
                :
                null
            ))
          }
        </div>        
      </div>
    </div>
  )
}



export default App
