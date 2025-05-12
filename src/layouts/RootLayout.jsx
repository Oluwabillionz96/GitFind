import { useEffect, useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import SidebarMobile, { SideBar } from "../components/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { SharedContext, useTheme } from "../components/SharedContext";
import SearchBar from "../components/SearchBar";
const { Content } = Layout;
const RootLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setIsCollapsed(true);
  }, [location]);

  const { isDark, setIsDark } = useTheme();
  if (!isDark) {
    document.body.style.backgroundColor = "#fff";
  } else {
    document.body.style.backgroundColor = "#010409";
  }

  return (
    <>
      <header className={`header ${isDark ? "dark-header" : ""}`}>
        <button
          className="header-buttons"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </button>
        <img
          src={isDark ? "./gitfind-logo-light.webp" : "./gitfind-logo.webp"}
          alt="An animated image of a cat with Binoculars"
          className="logo"
        />

        <button
          className="header-buttons"
          onClick={() => {
            setIsDark((prev) => !prev);
            localStorage.setItem("theme", !isDark);
            console.log(document.body.style.backgroundColor);
          }}
        >
          {!isDark ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </header>
      <SideBar isCollapsed={isCollapsed} dark={isDark} />
      {!isCollapsed && <SidebarMobile dark={isDark} />}
      <Layout
        className={`main-layout, ${
          !isCollapsed ? "not-collapsed" : "collapsed"
        }`}
      >
        {false && (
          <Content className={`content ${isDark ? "dark-content" : ""}`}>
            <SharedContext>
              <SearchBar />
              <Outlet />
            </SharedContext>
          </Content>
        )}
      </Layout>
    </>
  );
};

export default RootLayout;
