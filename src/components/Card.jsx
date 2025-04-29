import { Link } from "react-router-dom";

const Card = ({ data, date, main }) => {
  return (
    <>
      {!main ? (
        <div className="name-and-profile-image-section">
          <div className="image-container">
            <img src={data?.avatar_url} alt={`${data?.name}'s profile photo`} />
          </div>
          <div className="name-container">
            <h2>{data?.name}</h2>
            <Link to={data?.html_url} target="_blank">
              <p className="username"> @{data?.login}</p>
            </Link>

            <p className="date-Joined">Joined {data?.created_at && date}</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-container">
            <img src={data.src} alt={`${data?.login}'s profile photo`} />
            <Link
              to={data?.html_url}
              target="_blank"
              children={<p className="name">{data?.login} </p>}
            />
          </div>
          <div className="view-profile">
            <button>View Profile</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
