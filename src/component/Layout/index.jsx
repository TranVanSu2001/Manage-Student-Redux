import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  UnorderedListOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  LayoutWrapper,
  ContentWrapper,
  MainContentWrapper,
  Logo,
  Icon,
} from "./styled";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import "./layout.css";
const { Header, Content, Footer, Sider } = Layout;

const LayoutManage = (props) => {
  const { children } = props;

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    ///TEST LAYOUT

    <Layout>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <div className="logo" />
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Logo>
            <Link to="/">
              <Icon />
            </Link>
          </Logo>
          
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home Page</Link>
          </Menu.Item>

          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/managestu">Manage Student</Link>
          </Menu.Item>

          <Menu.Item key="1" icon={<UnorderedListOutlined />}>
            <Link to="/cv">View CV</Link>
          </Menu.Item>

          <Menu.Item key="1" icon={<UnorderedListOutlined />}>
            <Link to="/post">Post</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          className="site-layout-background"
          style={{ padding: 0, position: "fixed", zIndex: 1, width: "100%" }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
            // minHeight: "600px",
            backgroundColor: "red",
          }}
        >
          <ContentWrapper>
            <MainContentWrapper>{children}</MainContentWrapper>
          </ContentWrapper>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Suwj ©2021 Created by Suwj66
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutManage;
