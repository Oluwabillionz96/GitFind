import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import RepositoriesPage from "./pages/RepositoriesPage";
import FollowersPage from "./pages/FollowersPage";
import FollowingPage from "./pages/FollowingPage";
import MyProfile from "./components/MyProfile";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />}>
            <Route index element={<MyProfile />} />
            <Route path="/:login" element={<ProfileCard />} />
          </Route>
          <Route path="/repositories" element={<RepositoriesPage />} />
          <Route path="/followers" element={<FollowersPage />} />
          <Route path="/following" element={<FollowingPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
