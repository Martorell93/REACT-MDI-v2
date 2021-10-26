import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HeaderToggle = () => {
    return (
        <div className="header_toggle">
           <FontAwesomeIcon icon={faEllipsisV} className='ellipsis'/>
        </div>
    )
}

export default HeaderToggle
