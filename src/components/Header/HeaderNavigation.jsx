import React from 'react'
import HeaderNavProfile from './HeaderNavProfile'
import { Profile } from '../../models/profile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const HeaderNavigation = () => {
    return (
        <div className="header_navi container_spaceB">
            <button className="button notifications container_spaceB">
                <FontAwesomeIcon icon={faBell} className='noti_bell'/>
                <h5 className="bubble display_center">5</h5>
            </button>
            <button className="button tasks container_spaceB">
                <FontAwesomeIcon icon={faUser} className='task_bell'/>
                <h3 className="task_name">My Tasks</h3>
            </button>
            <button className="button user container_spaceB">
                {Profile.map((profile_, i) => (
                    <HeaderNavProfile key={i} name={profile_.name} surname={profile_.surname}/>
                ))
                }
            </button>
        </div>
    )
}

export default HeaderNavigation
