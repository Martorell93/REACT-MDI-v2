import React from 'react'
import logo from '../../../assets/img/header_brand_logo.png'
import './HeaderLogo.scss'

const HeaderLogo = () => {
    const projectName = "acm.chat"

    return (
        <section className="header_logo container_center">
            <article className="logo">
                <img src={logo} alt="logo acm.chat" />
            </article>
            <article className="name">
                {projectName}
            </article>
        </section>
    )
}

export default HeaderLogo
