import "../styles/LoadingRepositories.css";
import RepositoryCard from "./RepositoryCard";

const LoadingRepositories = () => {
  return (
    <div className="loading-repositories-container">
      <div className="button-containers">
        <div className="length"></div>
        <div className="length"></div>
        <div className="length"></div>
      </div>

      <div className="repositories-container">
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </div>
    </div>
  );
};

export default LoadingRepositories;
