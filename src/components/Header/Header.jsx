import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderNavigation from './HeaderNavigation'
import HeaderSearchbox from './HeaderSearchbox'
import HeaderToggle from './HeaderToggle'
import "./Header.scss";


const Header = () => {
    return (
        <div className='container_spaceB header'>
            <div className="header_left container_spaceB">
                <HeaderLogo />
                <HeaderSearchbox />
            </div>

            <div className="header_right container_spaceB">
                <HeaderNavigation />
                <HeaderToggle />
            </div>
        </div>
    )
}

export default Header
