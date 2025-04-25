import "../styles/loadingProfileCard.css";

const LoadingProfileCard = () => {
  return (
    <>
      <div className="loading-profile-container">
        <div className="bio">
          <p></p>
          <p></p>
          <p className="w-[70%]"></p>
        </div>

        <div className="socials">
          <div className="main">
            <div></div>
            <div></div>
          </div>
          <div className="main">
            <div></div>
            <div></div>
          </div>
          <div className="main">
            <div></div>
            <div></div>
          </div>
          <div className="main">
            <div></div>
            <div></div>
          </div>
          <div className="main">
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="details-container"></div>

        <button className="visit-profile-button"></button>
      </div>
    </>
  );
};

export default LoadingProfileCard;
