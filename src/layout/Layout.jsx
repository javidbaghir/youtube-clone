import { useState } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [menu, setMenu] = useState(true);

  const toggleSidebar = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-content" style={{ display: "flex" }}>
        <Sidebar menu={menu} />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
