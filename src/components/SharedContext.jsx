import { createContext, useContext, useEffect, useState } from "react";
import fetchData, { fetchRandomUser } from "../Logic/FetchData";

const DataContext = createContext();

export const SharedContext = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [randomUsers, setRandomUsers] = useState();
  const [error, setError] = useState({ isError: false, message: "" });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        setError({ ...error, isError: true, message: err.message });
      })
      .finally(() => {
        setLoading(false);
      });

    fetchRandomUser()
      .then((response) => {
        setRandomUsers(response);
      })
      .catch((err) =>
        setError({ ...error, isError: true, message: err.message })
      );
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
        error,
        setError,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useShared() {
  return useContext(DataContext);
}
