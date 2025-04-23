import axios from "axios";
import { IoMdSearch } from "react-icons/io";
import fetchData from "../Logic/FetchData";
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import LoadingProfileCard from "../components/LoadingProfileCard";

const HomePage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    });
  }, []);

  return (
    <>
      {!loading && console.log(data)}
      <h1>GitFind</h1>
      <div className="input-container">
        <input
          type="text"
          name="user-input"
          id="user-input"
          placeholder="Enter a valid Github username"
        />
        <button>
          <IoMdSearch />
        </button>
      </div>
      <button className="fetch-random">Fetch Random Profile</button>
      {loading ? (
        <LoadingProfileCard />
      ) : (
        <ProfileCard
          name={data?.name}
          userName={data?.login}
          dateJoined={data?.created_at.split("T")[0]}
          profileImageURL={"./test.jpg" || data?.avatar_url}
        />
      )}
    </>
  );
};

export default HomePage;
