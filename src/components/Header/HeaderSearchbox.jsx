import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const HeaderSearchbox = () => {
    return (
        <div className="HeaderSearchbox">
            <div className="search">
                <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                <input type="text" placeholder='Search' className="searchText" />
                </div>
        </div>
    )
}

export default HeaderSearchbox
