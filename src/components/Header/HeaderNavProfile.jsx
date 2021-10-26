import React from 'react';

const HeaderNavProfile = (props) => {
    return (
        <div className='user_profile'>
            <div className="nav_profile container_spaceB">
                <img src="src\assets\img\user_picture.png" alt="Profile Image" className="img_profile" />
                <h3 className="profile_name">
                {props.name} {props.surname}
                </h3>
            </div>
        </div>
    )
}

export default HeaderNavProfile
