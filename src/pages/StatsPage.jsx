import { useShared } from "../components/SharedContext";
import "../styles/stats.css";
import Error from "../components/Error";
import desert from "../assets/desert.svg";
import connect from "../assets/connect.svg";

const StatsPage = () => {
  const { data, loading, error } = useShared();
  return (
    <>
      {loading ? (
        <p>Loading</p>
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
