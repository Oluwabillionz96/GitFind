import { Menu } from "antd";
import { GrOverview } from "react-icons/gr";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiGitRepositoryLine, RiUserFollowLine } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        theme="dark"
        className="menu"
        items={[
          {
            key: "1",
            icon: <GrOverview />,
            label: "Overview",
          },
          {
            key: "2",
            icon: <RiGitRepositoryLine />,
            label: "Repositories",
          },
          {
            key: "3",
            icon: <SlUserFollow />,
            label: "Followers",
          },
          {
            key: "4",
            icon: <RiUserFollowLine />,
            label: "Following",
          },
          {
            key: "5",
            icon: <IoStatsChartSharp />,
            label: "Stats",
          },
        ]}
      />
    </aside>
  );
};

export default Sidebar;
