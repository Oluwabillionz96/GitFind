import { useEffect, useState } from "react";
import { useShared } from "./SharedContext";
import { fetchItems } from "../Logic/FetchItems";
import Card from "./Card";
import FollowersAndFollowingLoading from "./FollowersAndFollowingLoading";
import Error from "./Error";
import desert from "../assets/desert.svg";
import connect from "../assets/connect.svg";

const FollowersAndFollowing = ({ follow_url, followNumber }) => {
  const { data, loading, setLoading, error, setError } = useShared();
  const [follow, setFollow] = useState([]);

  useEffect(() => {
    if (!follow_url) return;

    const fetchFollow = async () => {
      try {
        setLoading(true);
        const perPage = 100;
        const totalPages = Math.ceil(followNumber / perPage);
        let allFollow = [];

        for (let page = 1; page <= totalPages; page++) {
          const url = `${follow_url}?per_page=${perPage}&page=${page}`;
          const response = await fetchItems(url);
          allFollow = allFollow.concat(response);
        }

        setFollow(allFollow);
      } catch (error) {
        setError({ isError: true, message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchFollow();
  }, [setLoading, setError, follow_url, followNumber]);

  let date = new Date(data?.created_at);
  date = date.toDateString().split(" ");
  date = date.splice(1, date.length - 1);
  date = `${date.slice(0, 1)} ${date.slice(2, 3)}`;

  return (
    <>
      {loading ? (
        <FollowersAndFollowingLoading />
      ) : error.isError ? (
        error.message === 404 ? (
          <Error
            image={desert}
            headingText={404}
            text={"User Not Found. Please Enter a valid username"}
            alt={"Desert Scene"}
          />
        ) : (
          <Error
            image={connect}
            headingText={"Something went wrong."}
            text={"Check Your Internet connection and try again."}
            alt={"Network Error Image"}
          />
        )
      ) : (
        <ul className="followers-container">
          {follow?.map((followData) => (
            <li key={followData?.id}>
              <Card data={followData} date={date} main={true} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FollowersAndFollowing;
