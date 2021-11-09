import React from 'react'
import HeaderNavProfile from './HeaderNavProfile'
import { Profile } from '../../../models/profile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import Tabulable from '../../Tabulable'
import './HeaderNavigation.scss'

const HeaderNavigation = () => {
    return (
        <ul className="header_navi container_center">
            <li className="notifications"><Tabulable>
                <FontAwesomeIcon icon={faBell} className='noti_bell'/>
                <h5 className="bubble display_center">5</h5>
            </Tabulable></li>
            <li className="tasks"><Tabulable>
                <FontAwesomeIcon icon={faUser} className='task_bell'/>
                <h3 className="task_name">My Tasks</h3>
            </Tabulable></li>
            <li className="user"><Tabulable>
                {Profile.map((profile_, i) => (
                        <HeaderNavProfile key={i} name={profile_.name} surname={profile_.surname}/>
                    ))
                    }
            </Tabulable></li>
        </ul>
    )
}

export default HeaderNavigation
