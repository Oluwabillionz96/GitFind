import { useEffect, useState } from "react";
import { useShared } from "./SharedContext";
import { fetchItems } from "../Logic/FetchItems";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import fetchData from "../Logic/FetchData";

const FollowersAndFollowing = ({ follow_url, followNumber }) => {
  const { data, loading, setLoading, error, setError, setData } = useShared();
  const [follow, setFollow] = useState([]);
  const navigate = useNavigate();

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
        <p>Loading</p>
      ) : error.isError ? (
        <p>{error.message}</p>
      ) : (
        <ul className="followers-container">
          {follow?.map((followData) => (
            <li key={followData?.id}>
              <Card
                data={followData}
                date={date}
                main={true}
                handleClick={() => {
                  setLoading(true);
                  navigate("/");
                  fetchData(followData?.login)
                    .then((response) => setData(response))
                    .catch((err) =>
                      setError({ isError: true, message: err.message })
                    )
                    .finally(() => {
                      setLoading(false);
                    });
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FollowersAndFollowing;
