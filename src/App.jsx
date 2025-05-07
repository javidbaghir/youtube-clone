import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import Sidebar from "./components/sidebar/Sidebar"; // əlavə et
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(true);

  const toggleSidebar = () => {
    setMenu(!menu);
  };

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