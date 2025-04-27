import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useShared } from "./SharedContext";
import fetchData, { fetchRandomUser } from "../Logic/FetchData";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const {
    setLoading,
    setData,
    data,
    loading,
    randomUsers,
    setRandomUsers,
    error,
    setError,
  } = useShared();

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
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (userInput) {
              setLoading(true);
              fetchData(userInput)
                .then((response) => {
                  setData(response);
                  setUserInput("");
                })
                .catch((err) => {
                  setError({
                    ...error,
                    isError: true,
                    message: err.message,
                  });
                })
                .finally(() => {
                  setLoading(false);
                });
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
            fetchData(userName)
              .then((response) => {
                setData(response);
              })
              .catch((err) => {
                console.log(err);
              })
              .finally(() => {
                setLoading(false);
              });
          }
        }}
      >
        Fetch Random Profile
      </button>

      {loading ? (
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
      ) : error.isError ? (
        ""
      ) : (
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
      )}
    </>
  );
};

export default SearchBar;
