import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import RepositoriesPage from "./pages/RepositoriesPage";
import FollowersPage from "./pages/FollowersPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/repositories" element={<RepositoriesPage />} />
          <Route path="/followers" element={<FollowersPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
