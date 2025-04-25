import { useEffect, useState } from "react";
import { useShared } from "../components/SharedContext";
import { fetchItems } from "../Logic/FetchItems";
import RepositoryCard from "../components/RepositoryCard";

const RepositoriesPage = () => {
  const { data, loading, setLoading, randomUsers } = useShared();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    if (!data?.repos_url) return;

    setLoading(true);
    fetchItems(data?.repos_url).then((response) => {
      setRepositories(response);
      setLoading(false);
    });
  }, [data]);

  if (loading || !repositories) {
    return <p>Loading repositories...</p>;
  }

  return (
    <>
      {repositories?.map((repos) => (
        <li key={repos.id}>
          <RepositoryCard
            name={repos?.name}
            language={repos?.language}
            desc={repos?.description}
          />
        </li>
      ))}
    </>
  );
};

export default RepositoriesPage;
