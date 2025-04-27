import { useEffect, useState } from "react";
import { useShared } from "../components/SharedContext";
import { fetchItems } from "../Logic/FetchItems";
import RepositoryCard from "../components/RepositoryCard";

const RepositoriesPage = () => {
  const { data, loading, setLoading, error } = useShared();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    if (!data?.repos_url) return;

    setLoading(true);
    fetchItems(data?.repos_url).then((response) => {
      setRepositories(response);
      setLoading(false);
    });
  }, [data]);

  const languages = [];
  const allLanguages = [];
  function getAllLanguages() {
    repositories?.forEach((repo) => {
      allLanguages.push(repo?.language);
    });
  }

  function clearRepeatedLanguages() {
    allLanguages.forEach((language) => {
      if (!languages.includes(language)) {
        languages.push(language);
      }
    });
  }

  getAllLanguages();
  clearRepeatedLanguages();

  // repositories && console.log(allLanguages);
  return (
    <>
      <div>
        <button>All</button>
        {languages?.map((language) => (
          <li key={language}>
            <button>{language}</button>
          </li>
        ))}
      </div>
      {loading ? (
        "Still Loading..."
      ) : error.isError ? (
        <p>{error.message}</p>
      ) : (
        <ul className="repositories-container">
          {repositories?.map((repos) => (
            <li key={repos.id}>
              <RepositoryCard
                name={repos?.name}
                language={repos?.language}
                desc={repos?.description}
                url={repos?.url}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RepositoriesPage;
