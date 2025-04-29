import { useEffect, useState } from "react";
import { useShared } from "../components/SharedContext";
import { fetchItems } from "../Logic/FetchItems";
import Card from "../components/Card";

const FollowersPage = () => {
  const { data, loading, setLoading, error, setError } = useShared();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!data?.followers_url) return;

    const fetchFollowers = async () => {
      try {
        setLoading(true);
        const perPage = 100;
        const totalPages = Math.ceil(data?.followers / perPage);
        let allFollowers = [];

        for (let page = 1; page <= totalPages; page++) {
          const url = `${data?.followers_url}?per_page=${perPage}&page=${page}`;
          const response = await fetchItems(url);
          allFollowers = allFollowers.concat(response);
        }

        setFollowers(allFollowers);
      } catch (error) {
        setError({ isError: true, message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [data, setLoading, setError]);

  let date = new Date(data?.created_at);
  date = date.toDateString().split(" ");
  date = date.splice(1, date.length - 1);
  date = `${date.slice(0, 1)} ${date.slice(2, 3)}`;

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error.isError ? (
        <p>Error</p>
      ) : (
        <ul className="followers-container">
          {followers?.map((follower) => (
            <li key={follower?.id}>
              <Card data={follower} date={date} main />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FollowersPage;
