import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Menu from '../Menu/Menu';

const HeaderToggle = () => {

    const [menuOpened, setMenuOpened] = useState(false);

    const menuClasses = [
        "menu",
        menuOpened ? "opened" : null
    ].join(" ");

    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    }

    return (
        <div className="header_toggle" onClick={toggleMenu}>
            <div className='button'>
                <FontAwesomeIcon icon={faEllipsisV} className='ellipsis'/>
                <div className={menuClasses}>
                    <Menu/>
                </div>
            </div>
        </div>
    )
}

export default HeaderToggle
