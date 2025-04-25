import Linkify from "linkify-react";
import { FaXTwitter } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useShared } from "./SharedContext";

const Contact = () => {
  const { data } = useShared();
  return (
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
  );
};

export default Contact;
