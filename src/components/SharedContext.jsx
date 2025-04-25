import { createContext, useContext, useEffect, useState } from "react";
import fetchData, { fetchRandomUser } from "../Logic/FetchData";

const DataContext = createContext();

export const SharedContext = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [randomUsers, setRandomUsers] = useState();

  useEffect(() => {
    fetchData().then((response) => {
      setData(response);
      setLoading(false);

      fetchRandomUser().then((response) => {
        setRandomUsers(response);
      });
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        randomUsers,
        setRandomUsers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useShared() {
  return useContext(DataContext);
}
