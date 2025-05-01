import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useShared } from "./SharedContext";
import { fetchRandomUser } from "../Logic/FetchData";
import TopProfileCard from "./TopProfileCard";
import { handleDataFetch } from "../Logic/HandleDataFetch";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const {
    setLoading,
    data,
    setData,
    randomUsers,
    setRandomUsers,
    error,
    setError,
    loading,
  } = useShared();

  return (
    <>
      <h1>GitFind</h1>
      <div className="input-container">
        <input
          type="text"
          name="user-input"
          id="user-input"
          placeholder="Enter a valid Github username"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (userInput) {
              handleDataFetch(userInput, setLoading, setData, setError);
              setUserInput("");
            } else {
              alert("Input Required");
            }
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
            const random = Math.floor(Math.random() * randomUsers?.length) + 1;
            if (!numbers.includes(randomNumber)) {
              numbers.push(random);
            } else {
              randomNumber();
            }
          }

          if (numbers.length >= randomUsers?.length) {
            fetchRandomUser().then((response) => {
              setRandomUsers(response);
            });
          }

          randomNumber();

          setLoading(true);
          if (isNaN(numbers[numbers.length - 1])) {
            setLoading(false);
            setError({ ...error, isError: true, message: "Oops" });
          } else {
            const userName = randomUsers[numbers[numbers.length - 1]].login;
            handleDataFetch(userName, setLoading, setData, setError);
          }
        }}
      >
        Fetch Random Profile
      </button>
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
        </>
      ) : error.isError ? null : (
        <TopProfileCard data={data} />
      )}
    </>
  );
};

export default SearchBar;
