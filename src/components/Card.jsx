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
            <p className="name">{data?.login}</p>
          </div>
          <div className="view-profile">
            <p>View Profile</p>
            <div className="btn-containeer">
              <button>GitFind</button>
              <button>GitHub</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
