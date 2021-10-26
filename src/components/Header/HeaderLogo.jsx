import React from 'react'
import logo from './../../assets/img/header_brand_logo.png'

const HeaderLogo = () => {
    const projectName = "acm.chat"

    return (
        <div className="header_logo container_center">
            <div className="logo">
                <img src={logo} alt="logo acm.chat" />
            </div>
            <div className="name">
                {projectName}
            </div>
        </div>
    )
}

export default HeaderLogo
