import axios from "axios";
import { IoMdSearch } from "react-icons/io";
import fetchData, { fetchRandomUser, rateCheck } from "../Logic/FetchData";
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import LoadingProfileCard from "../components/LoadingProfileCard";
import { fetchItems } from "../Logic/FetchItems";

const HomePage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [randomUsers, setRandomUsers] = useState();
  const [count, setCount] = useState({ followers: 0, followings: 0 });

  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
      setLoading(false);
    });

    fetchRandomUser().then((response) => {
      setRandomUsers(response);
    });

    rateCheck();
  }, []);

  // fetchItems(data?.followers_url).then((response) => {
  //   setCount({ ...count, followers: response.length });
  // });
  // fetchItems(data?.followers_url.replace("followers", "following")).then(
  //   (response) => {
  //     setCount({ ...count, followings: response.length });
  //   }
  // );
  // fetchItems(data?.followers_url).then((response) => {
  //   setCount({ ...count, followers: response.length });
  // });

  let date = new Date(data?.created_at);
  date = date.toDateString().split(" ");
  date = date.splice(1, date.length - 1);
  date = `${date.slice(0, 1)} ${date.slice(2, 3)}`;

  return (
    <>
      <h1>GitFind</h1>
      <div className="input-container">
        <input
          type="text"
          name="user-input"
          id="user-input"
          placeholder="Enter a valid Github username"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setLoading(true);
            fetchData(userInput).then((response) => {
              setData(response);
              setLoading(false);
            });
          }}
        >
          <IoMdSearch />
        </button>
      </div>
      <button
        className="fetch-random"
        onClick={() => {
          const numbers = [];
          function randomNumber() {
            const random = Math.floor(Math.random() * randomUsers.length) + 1;
            if (!numbers.includes(randomNumber)) {
              numbers.push(random);
            } else {
              randomNumber();
            }
          }

          if (numbers.length >= randomUsers.length) {
            fetchRandomUser().then((response) => {
              setRandomUsers(response);
            });
          }

          randomNumber();

          setLoading(true);
          fetchData(randomUsers[numbers[numbers.length - 1]].login).then(
            (response) => {
              setData(response);
              setLoading(false);
            }
          );
        }}
      >
        Fetch Random Profile
      </button>
      {loading ? (
        <LoadingProfileCard />
      ) : (
        <ProfileCard
          name={data?.name}
          userName={data?.login}
          dateJoined={data.created_at ? date : ""}
          profileImageURL={data?.avatar_url}
          bio={data?.bio || "Account doesn't have a bio."}
          followers={data?.followers}
          following={data?.following}
          repos={data?.public_repos}
          xUsername={data?.twitter_username}
          email={data?.email}
          location={data?.location}
          blog={data?.blog}
          company={data?.company}
        />
      )}
    </>
  );
};

export default HomePage;
