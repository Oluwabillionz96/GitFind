import ProfileCard from "../components/ProfileCard";
import LoadingProfileCard from "../components/LoadingProfileCard";
import { useShared } from "../components/SharedContext";

const HomePage = () => {
  const { loading, error } = useShared();
  if (error.isError) {
    return <p>{error.message}</p>;
  }
  return <>{loading ? <LoadingProfileCard /> : <ProfileCard />}</>;
};

export default HomePage;
