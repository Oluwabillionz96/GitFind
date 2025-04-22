import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Content } = Layout;
const RootLayout = () => {
  const [isCollasped, setIscollasped] = useState(true);
  return (
    <>
      <header className="header">
        <button
          className="header-buttons"
          onClick={() => {
            setIscollasped(!isCollasped);
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
          <IoMdSearch />
        </button>
      </header>

      <Layout className="main-layout">
        <Content className="content">
          {!isCollasped && <Sidebar />}
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};

export default RootLayout;
