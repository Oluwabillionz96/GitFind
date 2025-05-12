import "../styles/profileCard.css";
import LoadingProfileCard from "./LoadingProfileCard";
import { useShared } from "./SharedContext";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import Bio, { Details } from "./Bio";
import Contact from "./Contact";
import desert from "../assets/desert.svg";
import connect from "../assets/connect.svg";
import Error from "./Error";

const ProfileCard = () => {
  const { loading, error, data } = useShared();
  return (
    <>
      {loading ? (
        <LoadingProfileCard />
      ) : error.isError ? (
        error.message === 404 ? (
          <Error
            image={desert}
            headingText={404}
            text={"User Not Found. Please Enter a valid username"}
            alt={"Desert Scene"}
          />
        ) : (
          <Error
            image={connect}
            headingText={"Something went wrong."}
            text={"Check Your Internet connection and try again."}
            alt={"Network Error Image"}
          />
        )
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
