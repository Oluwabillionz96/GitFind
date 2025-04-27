import { useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { SharedContext } from "../components/SharedContext";
import SearchBar from "../components/SearchBar";
const { Content } = Layout;
const RootLayout = () => {
  const [isCollasped, setIsCollasped] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setIsCollasped(true);
  }, [location]);
  return (
    <>
      <header className="header">
        <button
          className="header-buttons"
          onClick={() => {
            setIsCollasped(!isCollasped);
          }}
        >
          {isCollasped ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </button>
        <img
          src="./gitfind-logo.png"
          alt="An animated image of a cat with Binoculars"
          className="logo"
        />
        <button className="header-buttons">
          <MdDarkMode />
        </button>
      </header>

      <Layout className="main-layout">
        <Content className="content">
          {!isCollasped && <Sidebar />}
          <SharedContext>
            <SearchBar />
            <Outlet />
          </SharedContext>
        </Content>
      </Layout>
    </>
  );
};

export default RootLayout;
