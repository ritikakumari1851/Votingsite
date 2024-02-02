import React, { useState } from 'react';
import img1 from '../assets/avtar.jpg';
import img2 from '../assets/avtar1.jpg';
import img3 from '../assets/avtar3.jpg';
import img4 from '../assets/avtar4.jpg';

const UserProfileCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const avatars = [img1, img2, img3, img4];

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    setShowDropdown(false);
  };

  return (
    <div className="card">
      <div className="user-profile">
        <img
          src={selectedAvatar || img1} // Use img1 as default if selectedAvatar is null
          alt="User Profile"
          className="avatar"
        />
        <button onClick={() => setShowDropdown(!showDropdown)} className="avatar-button text-xl font-serif bg-blue-950 text-white p-4 rounded-md">
          Change Avatar
        </button>
      </div>

      {showDropdown && (
        <div className="avatar-options">
          {avatars.map((avatar, index) => (
            <div
              key={index}
              className="avatar-option"
              onClick={() => handleAvatarClick(avatar)}
            >
              <img src={avatar} alt={`Avatar Option ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
