import { useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useShared } from "./SharedContext";
import { fetchRandomUser } from "../Logic/FetchData";
import TopProfileCard from "./TopProfileCard";
import { handleDataFetch } from "../Logic/HandleDataFetch";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const [errordisplay, setErrorDisplay] = useState([]);
  let errorId = useRef(0);
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
      <div className="displayed-error-container ">
        {errordisplay.map((err) => (
          <div key={err.id}>{err.text}</div>
        ))}
      </div>
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
            if (!userInput) {
              const id = ++errorId.current;
              const newError = {
                id,
                text: "Search Input Is required!",
              };

              setErrorDisplay((prev) => [...prev, newError]);

              setTimeout(() => {
                setErrorDisplay((prev) =>
                  prev.filter((error) => error.id !== id)
                );
              }, 5000);
            } else {
              handleDataFetch(
                userInput.trim(),
                setLoading,
                setData,
                setError,
                setUserInput
              );
              setErrorDisplay([]);
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
            handleDataFetch(
              userName,
              setLoading,
              setData,
              setError,
              setUserInput
            );
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
