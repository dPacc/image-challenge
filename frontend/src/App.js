import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import UploadCSV from "./components/UploadCSV";
import FrameList from "./components/FrameList";
import "./App.css";

const { Header, Content, Footer } = Layout;

const NavigationHeader = () => {
  const location = useLocation();

  const getCurrentMenuKey = () => {
    switch (location.pathname) {
      case "/frames":
        return "2";
      case "/":
      default:
        return "1";
    }
  };

  return (
    <Header className="layout-header">
      <div className="logo">
        <img
          src="https://aiqintelligence.ae/application/themes/aiqtheme/assets/images/logo.svg"
          alt="AIQ Logo"
        />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[getCurrentMenuKey()]}
        className="menu"
      >
        <Menu.Item key="1">
          <Link to="/">Upload CSV</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/frames">Frame List</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <NavigationHeader />
        <Content style={{ padding: "0 50px", overflow: "auto" }}>
          <div className="site-layout-content">
            <Routes>
              <Route path="/" element={<UploadCSV />} />
              <Route path="/frames" element={<FrameList />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }} className="footer">
          AIQ ©2024 ~ Made by{" "}
          <a
            href="https://github.com/dPacc/image-challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            dPacc
          </a>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
