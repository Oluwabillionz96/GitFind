import "../styles/loadingProfileCard.css";

const LoadingProfileCard = () => {
  return (
    <div className="loading-profile-container">
      <div className="name-and-profile-image-section">
        <div className="image-container"></div>
        <div className="name-container">
          <h2></h2>
          <p className="username"> </p>
          <p className="date-Joined"></p>
        </div>
      </div>
    </div>
  );
};

export default LoadingProfileCard;
