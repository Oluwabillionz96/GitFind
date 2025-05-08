import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import RepositoriesPage from "./pages/RepositoriesPage";
import FollowersPage from "./pages/FollowersPage";
import FollowingPage from "./pages/FollowingPage";
import StatsPage from "./pages/StatsPage";
import { Theme } from "./components/SharedContext";

const App = () => {
  return (
    <>
      <Theme>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/repositories" element={<RepositoriesPage />} />
            <Route path="/followers" element={<FollowersPage />} />
            <Route path="/following" element={<FollowingPage />} />
            <Route path="/stats" element={<StatsPage />} />
          </Route>
        </Routes>
      </Theme>
    </>
  );
};

export default App;
