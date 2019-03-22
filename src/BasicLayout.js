import React from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import Router from "./routers/index";

const { Header, Sider, Content } = Layout;

class BasicLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return localStorage.getItem("jwt") ? (
      <MyLayout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Logo className="logo">Study Hub</Logo>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <a href="/home">
                <Icon type="home" />
                <span>Home</span>
              </a>
            </Menu.Item>

            <Menu.Item key="2">
              <a href="/students">
                <Icon type="user" />
                <span>Students</span>
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="/courses">
                <Icon type="read" />
                <span>Courses</span>
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <TriggerIcon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <Router />
          </Content>
        </Layout>
      </MyLayout>
    ) : (
      <Router />
    );
  }
}

const TriggerIcon = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
`;

const MyLayout = styled(Layout)`
  height: 100%;
`;

const Logo = styled.div`
  height: 32px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 16px;
  text-align: center;
  color: white;
`;

//useless, just a trigger for redirect
function mapStateToProps(state) {
  return {
    status: state.login
  };
}
export default connect(mapStateToProps)(BasicLayout);
