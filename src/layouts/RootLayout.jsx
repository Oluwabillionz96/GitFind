import { Button, Layout } from "antd";
import { useState } from "react";
const { Header, Sider, Content } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <Sider
          collapsible
          collapsed={isCollapsed}
          style={{ display: "none" }}
        ></Sider>
      </Layout>
      <Layout className="content">
        <Header>
          <Button
            type="text"
            icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          />
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </>
  );
};

export default RootLayout;
