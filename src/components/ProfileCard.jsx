import "../styles/profileCard.css";

const ProfileCard = ({ profileImageURL, name, userName, dateJoined }) => {
  return (
    <div className="profile-container">
      <div className="name-and-profile-image-section">
        <div className="image-container">
          <img src={profileImageURL} alt={`${name}'s profile photo`} />
        </div>
        <div className="name-container">
          <h2>{name}</h2>
          <p className="username"> @{userName}</p>
          <p className="date-Joined">Joined {dateJoined}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
