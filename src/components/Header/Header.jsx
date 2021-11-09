import React from 'react'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderNavigation from './HeaderNavigation/HeaderNavigation'
import HeaderSearchbox from './HeaderSearchBox/HeaderSearchbox'
import HeaderToggle from './HeaderToggle/HeaderToggle'
import "./Header.scss";
import Tabulable from '../Tabulable'


const Header = () => {
    return (
        <nav className='container_spaceB header'>
            <ul className="header_left container_spaceB">
                <li>
                <Tabulable>
                    <HeaderLogo /> 
                </Tabulable>
                </li>
                <li>
                    <HeaderSearchbox />
                </li>
            </ul>

            <ul className="header_right container_spaceB">
                <li>
                    <HeaderNavigation />  
                </li>
                <li>
                    <HeaderToggle />
                </li>                
            </ul>
        </nav>
    )
}

export default Header
