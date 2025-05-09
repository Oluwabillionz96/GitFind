import { useEffect, useState } from "react";
import { useShared } from "../components/SharedContext";
import { fetchItems } from "../Logic/FetchItems";
import RepositoryCard from "../components/RepositoryCard";
import DropDown from "../components/DropDown";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import LoadingRepositories from "../components/LoadingRepositories";
import "../styles/repositoryCard.css";

const RepositoriesPage = () => {
  const { data, loading, setLoading, error, setError } = useShared();
  const [allRepositories, setAllRepositories] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (!data?.repos_url) return;

    const fetchRepositories = async () => {
      try {
        setLoading(true);
        setAllRepositories([]); //Clear all repositories before resetting it with the data coming from the api
        const perPage = 100;
        const totalPages = Math.ceil(data?.public_repos / perPage);
        let allRepos = [];

        for (let page = 1; page <= totalPages; page++) {
          const url = `${data?.repos_url}?per_page=${perPage}&page=${page}`;
          const response = await fetchItems(url);
          allRepos = allRepos.concat(response);
        }
        setAllRepositories(allRepos);
        setRepositories(allRepos);
      } catch (error) {
        setError({ isError: true, message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, [data, setLoading, setError]);

  useEffect(() => {
    if (!allRepositories.length) return;

    const unqiueLanguages = [
      ...new Set(
        allRepositories
          .map((repo) => repo.language)
          .filter((language) => language !== null)
      ),
    ];

    //The constructor function new Set is used to wrap in an array with a spread operator is used to avoid repetition of languages;

    unqiueLanguages.unshift("All");

    const languagesObject = unqiueLanguages.map((language, index) => {
      return {
        key: (index + 1).toString(),
        label: language,
        onClick: () => {
          setCurrentPage(1);
          if (language === "All") {
            setRepositories(allRepositories);
          } else {
            setRepositories(
              allRepositories.filter((repos) => {
                return repos.language === language;
              })
            );
          }
        },
      };
    });

    setLanguages(languagesObject);
  }, [allRepositories]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const repositoriesPerPage = 20;

  const indexOfLastRepo = currentPage * repositoriesPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repositoriesPerPage;
  const currentRepositories = repositories.slice(
    indexOfFirstRepo,
    indexOfLastRepo
  );

  if (loading) {
    return <LoadingRepositories />;
  }

  if (error.isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      {allRepositories && (
        <div className="select">
          <DropDown items={languages} />
          <div className="length">
            Page {currentPage} of{" "}
            {Math.ceil(repositories.length / repositoriesPerPage)}
          </div>
          <div className="length">{currentRepositories.length} Repo</div>
        </div>
      )}
      <ul className="repositories-container">
        {currentRepositories?.map((repos) => (
          <li key={repos.id}>
            <RepositoryCard
              name={repos?.name}
              language={repos?.language}
              desc={repos?.description}
              url={repos?.html_url}
            />
          </li>
        ))}
      </ul>
      {Math.ceil(repositories.length / repositoriesPerPage) > 1 && (
        <div className="button-container">
          <button
            className="prev"
            onClick={() => {
              setCurrentPage((prev) => {
                return Math.max(prev - 1, 1);
              });
            }}
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
          </button>
          <button
            className="next"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setCurrentPage((prev) =>
                prev < Math.ceil(repositories.length / repositoriesPerPage)
                  ? prev + 1
                  : prev
              );
            }}
            disabled={
              currentPage ===
              Math.ceil(repositories.length / repositoriesPerPage)
            }
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default RepositoriesPage;
