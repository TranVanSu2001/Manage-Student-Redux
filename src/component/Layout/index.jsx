import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { PieChartOutlined, UnorderedListOutlined } from "@ant-design/icons";
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
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          className="sider"
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Logo>
              <Link to="/">
                <Icon />
              </Link>
            </Logo>

            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">Manage Student</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<UnorderedListOutlined />}>
              <Link to="/cv">View CV</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />

          {/* ----------content------------- */}
          <Content style={{ margin: "0 16px" }}>
            {/* <LayoutWrapper> */}
            <ContentWrapper>
              <MainContentWrapper>{children}</MainContentWrapper>
            </ContentWrapper>
            {/* </LayoutWrapper> */}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Suwj ©2021 Created by Suwj
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutManage;
