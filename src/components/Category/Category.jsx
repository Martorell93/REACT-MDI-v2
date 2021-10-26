import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle, faPlus } from '@fortawesome/free-solid-svg-icons'
import './Category.scss'

const Category = () => {
    return (
        <div className="category container_spaceB">
            <div className="category_box container_spaceE">
                <FontAwesomeIcon icon={faCircle} className='category_dots red'/>
                <FontAwesomeIcon icon={faCircle} className='category_dots oranje'/>
                <FontAwesomeIcon icon={faCircle} className='category_dots green'/>
                <FontAwesomeIcon icon={faCircle} className='category_dots blue'/>
                <FontAwesomeIcon icon={faCircle} className='category_dots purple'/>
                <FontAwesomeIcon icon={faCircle} className='category_dots grey'/>
            </div>
            <button className="add_category container_center">
                <FontAwesomeIcon icon={faPlus} className='add'/>
            </button>
        </div>
    )
}

export default Category
