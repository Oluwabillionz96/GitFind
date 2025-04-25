import { Link } from "react-router-dom";
import "../styles/profileCard.css";
import Bio, { Details } from "./Bio";
import Contact from "./Contact";
import { FaGithub } from "react-icons/fa";
import { useShared } from "./SharedContext";

const ProfileCard = () => {
  const { data } = useShared();

  // let date = new Date(data?.created_at);
  // date = date.toDateString().split(" ");
  // date = date.splice(1, date.length - 1);
  // date = `${date.slice(0, 1)} ${date.slice(2, 3)}`;

  return (
    <div className="profile-container">
      {/* <div className="name-and-profile-image-section">
        <div className="image-container">
          <img src={data?.avatar_url} alt={`${data?.name}'s profile photo`} />
        </div>
        <div className="name-container">
          <h2>{data?.name}</h2>
          <Link to={data?.html_url} target="_blank">
            <p className="username"> @{data?.login}</p>
          </Link>

          <p className="date-Joined">Joined {data.created_at ? date : ""}</p>
        </div>
      </div> */}
      <Bio />
      <Contact />
      <Details />
      <Link to={data?.html_url} className="visit-profile">
        <button className="visit-profile-button">
          <FaGithub />
          Visit Profile
        </button>
      </Link>
    </div>
  );
};

export default ProfileCard;
