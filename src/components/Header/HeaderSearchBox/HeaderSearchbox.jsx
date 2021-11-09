import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import './HeaderSearchBox.scss'

const HeaderSearchbox = () => {
    return (
        <section className="header_searchbox">
            <article className="search">
                <FontAwesomeIcon icon={faSearch} className="search_icon" />
                <input type="text" placeholder='Search' className="search_text" />
            </article>
        </section>
    )
}

export default HeaderSearchbox
