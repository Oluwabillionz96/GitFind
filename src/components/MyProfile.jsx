import { useEffect, useState } from "react";
import { useShared } from "./SharedContext";
import fetchData from "../Logic/FetchData";
import Bio from "./Bio";
import Linkify from "linkify-react";
import { FaXTwitter } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { RiUserFollowLine, RiGitRepositoryLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const { setLoading, setError } = useShared();

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        setLoading(true);
        const response = await fetchData();
        setData(response);
      } catch (error) {
        setError({ isError: true, message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchMyProfile();
  }, []);

  return (
    <div className="profile-container">
      <Bio bio={data?.bio} />
      <>
        {data && (
          <div className="socials">
            {data?.twitter_username && (
              <div className="x">
                <div className="icon">
                  <FaXTwitter />
                </div>
                <Link to={`https://x.com/${data?.twitter_username}`}>
                  @{data?.twitter_username}
                </Link>
              </div>
            )}
            {data?.email && (
              <div className="email">
                <div className="icon">
                  <TfiEmail />
                </div>
                <Linkify>{data?.email}</Linkify>
              </div>
            )}
            {data?.location && (
              <div className="location">
                <div className="icon">
                  <MdOutlineLocationOn />
                </div>
                {data?.location}
              </div>
            )}
            {data?.blog && (
              <div className="blog">
                <div className="icon">
                  <GiWireframeGlobe />
                </div>
                <Linkify>{data?.blog}</Linkify>
              </div>
            )}
            {data?.company && (
              <div className="company">
                <div className="icon">
                  <IoIosPeople />
                </div>
                <Linkify>{data?.company}</Linkify>
              </div>
            )}
          </div>
        )}
      </>

      <div className="details-container">
        <div className="details">
          <div className="following">
            <div className="icon">
              <RiUserFollowLine />
            </div>
            <p className="text">{data?.following} Following</p>
          </div>
          <div className="followers">
            <Link to={"/followers"}>
              <div className="icon">
                <SlUserFollow />
              </div>
              <p className="text">{data?.followers} Followers</p>
            </Link>
          </div>
          <div className="repositories">
            <Link to={"/repositories"}>
              <div className="icon">
                <RiGitRepositoryLine />
              </div>
              <p className="text">{data?.public_repos} Repositories</p>
            </Link>
          </div>
        </div>
      </div>
      <Link to={data?.html_url} className="visit-profile">
        <button className="visit-profile-button">
          <FaGithub />
          Visit Profile
        </button>
      </Link>
    </div>
  );
};

export default MyProfile;
