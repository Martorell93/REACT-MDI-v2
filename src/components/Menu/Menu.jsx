import React from 'react'
import { menuOptions } from '../../models/menu'
import "./Menu.scss"
import SingleMenu from './SingleMenu'

const Menu = () => {
    return (
        <div className='whole_menu'>
            {
                menuOptions.map((menuOptions_, index) => (
                    <button className="button menu_sections">
                        <SingleMenu key={index} menu={menuOptions_}/>
                    </button>
                ))
            }
        </div>
    )
}

export default Menu
