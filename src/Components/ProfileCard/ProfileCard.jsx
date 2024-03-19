import React from 'react'
import './ProfileCard.css'
const ProfileCard = ({profileType, profileImage, profileName, profileDesignation}) => {
  return (
    <div className={`ProfileCard`}>
        <div className="ProfileContainer">
            <div className={`Image ${profileType}`}>
                <img src={profileImage} alt="" />
            </div>
            <div className="Details">
                <span className='Name'>{profileName}</span>
                <span className='Designation'>{profileDesignation}</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard