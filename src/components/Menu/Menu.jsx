import React from 'react'
import { menuOptions } from '../../models/menu'
import "./Menu.scss"
import SingleMenu from './SingleMenu'

const Menu = () => {
    return (
        <ul className='whole_menu'>
            {
                menuOptions.map((menuOptions_, index) => (
                    <li className="menu_sections"><a href="#" className="link">
                        <SingleMenu key={index} menu={menuOptions_}/>
                    </a></li>
                ))
            }
        </ul>
    )
}

export default Menu
