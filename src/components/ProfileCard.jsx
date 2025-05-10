import "../styles/profileCard.css";
import LoadingProfileCard from "./LoadingProfileCard";
import { useShared } from "./SharedContext";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import Bio,{Details} from "./Bio";
import Contact from "./Contact";

const ProfileCard = () => {
  const {loading,error,data} = useShared()
  return (
    <>
      {loading ? (
        <LoadingProfileCard />
      ) : error.isError ? (
        <p>{error.message}</p>
      ) : (
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
      )}
    </>
  );
};

export default ProfileCard;
