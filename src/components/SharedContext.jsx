import { createContext, useContext, useEffect, useState } from "react";
import fetchData, { fetchRandomUser } from "../Logic/FetchData";

const DataContext = createContext();
export const ThemeContext = createContext();

export const SharedContext = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [randomUsers, setRandomUsers] = useState();
  const [error, setError] = useState({ isError: false, message: "" });

  useEffect(() => {
    if (error.message === 404) {
      return;
    }
    
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
      .catch((err) => {
        setError({ ...error, isError: true, message: err.message });
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
        error,
        setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const Theme = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useShared() {
  return useContext(DataContext);
}

export function useTheme() {
  return useContext(ThemeContext);
}
