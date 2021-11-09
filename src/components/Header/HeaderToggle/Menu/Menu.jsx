import React from 'react'
import { menuOptions } from '../../../../models/menu'
import "./Menu.scss"
import SingleMenu from './SingleMenu'

const Menu = () => {
    return (
        <ul className='whole_menu'>
            {
                menuOptions.map((menuOptions_, index) => (
                    <li className="menu_sections">
                        <SingleMenu key={index} menu={menuOptions_}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default Menu
