import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useShared } from "./SharedContext";
import fetchData, { fetchRandomUser } from "../Logic/FetchData";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();
  const { setLoading, setData, randomUsers, setRandomUsers, error, setError } =
    useShared();

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
                  navigate(`/${userInput.trim()}`);
                  setUserInput("");
                })
                .catch((err) => {
                  setError({
                    ...error,
                    isError: true,
                    message: err.message,
                  });
                  console.log(err);
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
                navigate(`/${userName}`);
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
    </>
  );
};

export default SearchBar;
