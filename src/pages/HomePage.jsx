import ProfileCard from "../components/ProfileCard";
import LoadingProfileCard from "../components/LoadingProfileCard";
import { useShared } from "../components/SharedContext";
import MyProfile from "../components/MyProfile";
import { Outlet } from "react-router-dom";
import TopProfileCard from "../components/TopProfileCard";

const HomePage = () => {
  const { loading, error, data } = useShared();
  if (error.isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      {loading ? (
        <>
          <div className="loading-profile-container ">
            <div className="name-and-profile-image-section">
              <div className="image-container"></div>
              <div className="name-container">
                <h2></h2>
                <p className="username"> </p>
                <p className="date-Joined"></p>
              </div>
            </div>
          </div>
          <LoadingProfileCard />
        </>
      ) : (
        <>
          <TopProfileCard data={data} />
          <Outlet />
        </>
      )}
    </>
  );
};

export default HomePage;
