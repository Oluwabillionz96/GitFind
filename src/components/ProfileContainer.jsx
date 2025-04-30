import Bio, { Details } from "./Bio";
import Contact from "./Contact";
import { FaGithub } from "react-icons/fa";
import { useShared } from "./SharedContext";
import { Link } from "react-router-dom";

const ProfileContainer = () => {
  const { data } = useShared();

  return (
    <div className="profile-container">
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

export default ProfileContainer;
