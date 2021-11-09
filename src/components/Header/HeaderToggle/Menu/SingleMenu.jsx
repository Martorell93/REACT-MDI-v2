import React from 'react'

const SingleMenu = (props) => {
    return (
        <a href="#" className="container_spaceB">
            <div className="content_left">
                <img src={props.menu.icon} alt="icono" className="icono" />
            </div>
            <div className="content_right">
                <p className="nombre">{props.menu.nombre}</p>
            </div>
        </a>
    )
}

export default SingleMenu
