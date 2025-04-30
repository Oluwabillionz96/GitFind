import FollowersAndFollowing from "../components/FollowersAndFollowing";
import { useShared } from "../components/SharedContext";

const FollowingPage = () => {
  const { data } = useShared();
  return (
    <FollowersAndFollowing
      follow_url={`https://api.github.com/users/${data?.login}/following`}
      followNumber={data?.following}
    />
  );
};

export default FollowingPage;
