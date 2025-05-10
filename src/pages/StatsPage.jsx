import { useShared } from "../components/SharedContext";
import "../styles/stats.css";

const StatsPage = () => {
  const { data, loading, error } = useShared();
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : error.isError ? (
        <p>{error.message}</p>
      ) : (
        <>
          {data?.login && (
            <div className="stats">
              <div className="most-used-languages">
                <h2>Most Used Languages</h2>
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${data?.login}&theme=github-light&hide_title=true`}
                  alt="stats"
                />
              </div>
              <div className="stats">
                <h2>Stats</h2>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${data?.login}&theme=blueberry}`}
                  alt="stats"
                />
              </div>
              <div className="graph">
                <h2>Contribution Graph</h2>
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${data?.login}&theme=github-compact`}
                  alt="stats"
                />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default StatsPage;
