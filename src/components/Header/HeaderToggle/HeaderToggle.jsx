import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Menu from './Menu/Menu';
import './HeaderToggle.scss'

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
        <button className="button header_toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faEllipsisV} className='ellipsis'/>
                <section className={menuClasses}>
                    <Menu/>
                </section>
        </button>
    )
}

export default HeaderToggle
