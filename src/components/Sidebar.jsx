import { Menu } from "antd";
import { GrOverview } from "react-icons/gr";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiGitRepositoryLine, RiUserFollowLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <aside className="sidebar">
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        theme="dark"
        className="menu"
        items={[
          {
            key: "/",
            icon: (
              <Link to={"/"}>
                <GrOverview />
              </Link>
            ),
            label: "Overview",
          },
          {
            key: "/repositories",
            icon: (
              <Link to={"/repositories"}>
                <RiGitRepositoryLine />
              </Link>
            ),
            label: <p>Repositories</p>,
          },
          {
            key: "/followers",
            icon: (
              <Link to={"/followers"}>
                <SlUserFollow />
              </Link>
            ),
            label: "Followers",
          },
          {
            key: "/following",
            icon: <Link to={"/following"} children={<RiUserFollowLine />} />,
            label: "Following",
          },
          {
            key: "/stats",
            icon: <Link to={"/stats"} children={<IoStatsChartSharp />} />,
            label: "Stats",
          },
        ]}
      />
    </aside>
  );
};

export default Sidebar;
