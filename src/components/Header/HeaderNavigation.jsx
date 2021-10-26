import React from 'react'
import HeaderNavProfile from './HeaderNavProfile'
import { Profile } from '../../models/profile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const HeaderNavigation = () => {
    return (
        <div className="header_navi container_spaceB">
            <div className="notifications container_spaceB">
                <FontAwesomeIcon icon={faBell} className='noti_bell'/>
                <h5 className="bubble display_center">5</h5>
            </div>
            <div className="tasks container_spaceB">
                <FontAwesomeIcon icon={faUser} className='task_bell'/>
                <h3 className="task_name">My Tasks</h3>
            </div>
            <div className="user container_spaceB">
                {Profile.map((profile_, i) => (
                    <HeaderNavProfile key={i} name={profile_.name} surname={profile_.surname}/>
                ))
                }
            </div>
        </div>
    )
}

export default HeaderNavigation
