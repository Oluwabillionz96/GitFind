import "../styles/profileCard.css";
import Bio, { Details } from "./Bio";
import Contact from "./Contact";

const ProfileCard = ({
  profileImageURL,
  name,
  userName,
  dateJoined,
  bio,
  followers,
  following,
  repos,
  xUsername,
  email,
  location,
  blog,
  company,
}) => {
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
      <Bio bio={bio} />
      <Contact
        xUsername={xUsername}
        email={email}
        location={location}
        blog={blog}
        company={company}
      />
      <Details followers={followers} following={following} repos={repos} />
    </div>
  );
};

export default ProfileCard;
