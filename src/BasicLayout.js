import React from "react";
import { Layout, Menu, Icon } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import Switch from "./routers/MySwitch";
import { Link, withRouter } from "react-router-dom";

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

  componentDidMount() {
    this.setState({ mounted: true });
  }

  render() {
    return localStorage.getItem("jwt") ? (
      <MyLayout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <Logo className="logo">Study Hub</Logo>
          <Menu theme="dark" mode="inline">
            {/* add following in Menu tag */}
            {/* defaultSelectedKeys={["1"]} */}
            <Menu.Item key="1">
              <Link to="/home">
                <Icon type="home" />
                <span>Home</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/users">
                <Icon type="user" />
                <span>Users</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/courses">
                <Icon type="read" />
                <span>Courses</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <MyLayout>
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
              minHeight: 280
            }}
          >
            <Switch />
          </Content>
        </MyLayout>
      </MyLayout>
    ) : (
      <Switch />
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
  height: 100vh;
`;

const Logo = styled.div`
  height: 32px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 16px;
  text-align: center;
  color: white;
`;

// useless, just a trigger for redirect
function mapStateToProps(state) {
  return {
    status: state.login
  };
}
export default withRouter(connect(mapStateToProps)(BasicLayout));
// export default BasicLayout;
