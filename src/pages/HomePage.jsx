import { IoMdSearch } from "react-icons/io";

const HomePage = () => {
  return (
    <>
      <h1>GitFind</h1>
      <div className="input-container">
        <input
          type="text"
          name="user-input"
          id="user-input"
          placeholder="Enter a valid Github username"
        />
        <button><IoMdSearch /></button>
      </div>
      <button className="fetch-random">Fetch Random Profile</button>
    </>
  );
};

export default HomePage;
