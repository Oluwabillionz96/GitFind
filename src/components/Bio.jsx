import Linkify from "linkify-react";
import React from "react";
import { RiGitRepositoryLine, RiUserFollowLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";

const Bio = ({ bio }) => {
  return (
    <div className="bio">
      <Linkify>{bio}</Linkify>
    </div>
  );
};

export default Bio;

export const Details = ({ followers, following, repos }) => {
  return (
    <div className="details">
      <div className="following">
        <div className="icon">
          <RiUserFollowLine />
        </div>
        <p className="text">{following} Following</p>
      </div>
      <div className="followers">
        <div className="icon">
          <SlUserFollow />
        </div>
        <p className="text">{followers} Followers</p>
      </div>
      <div className="repositories">
        <div className="icon">
          <RiGitRepositoryLine />{" "}
        </div>
        <p className="text">{repos} Repositories</p>
      </div>
    </div>
  );
};
