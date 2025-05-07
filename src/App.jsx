import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import Sidebar from "./components/sidebar/Sidebar";
import { useEffect, useState } from "react";

function App() {
  const [menu, setMenu] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (location.pathname.includes("/video")) {
      setMenu(true); 
    } else {
      setMenu(true); 
    }
  }, [location]);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar menu={menu} />
      <Routes>
        <Route path="/" element={<Home menu={menu} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
