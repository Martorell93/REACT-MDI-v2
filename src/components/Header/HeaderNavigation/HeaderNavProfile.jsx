import React from 'react';

const HeaderNavProfile = (props) => {
    return (
        <section className='user_profile'>
            <article className="nav_profile container_spaceB">
                <img src="src\assets\img\user_picture.png" alt="Profile Image" className="img_profile" />
                <h3 className="profile_name">
                {props.name} {props.surname}
                </h3>
            </article>
        </section>
    )
}

export default HeaderNavProfile
