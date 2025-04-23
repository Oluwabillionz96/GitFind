import Linkify from "linkify-react";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Contact = ({ xUsername, email, location, blog, company }) => {
  return (
    <div className="socials">
      {xUsername && (
        <div className="x">
          <div className="icon">
            <FaXTwitter />
          </div>
          <Link to={`https://x.com/${xUsername}`}>@{xUsername}</Link>
        </div>
      )}
      {email && (
        <div className="email">
          <div className="icon">
            <TfiEmail />
          </div>
          <Linkify>{email}</Linkify>
        </div>
      )}
      {location && (
        <div className="location">
          <div className="icon">
            <MdOutlineLocationOn />
          </div>
          {location}
        </div>
      )}
      {blog && (
        <div className="blog">
          <div className="icon">
            <GiWireframeGlobe />
          </div>
          <Linkify>{blog}</Linkify>
        </div>
      )}
      {company && (
        <div className="company">
          <div className="icon">
            <IoIosPeople />
          </div>
          <Linkify>{company}</Linkify>
        </div>
      )}
    </div>
  );
};

export default Contact;
