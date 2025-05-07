import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { IoIosMore, IoMdMenu, IoMdNotifications } from "react-icons/io";
import { RiVideoUploadFill } from "react-icons/ri";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <IoMdMenu size={48} onClick={toggleSidebar} className="menu-icon" />
        <span className="logo">
          <Link className="link" to={"/"}>
            {" "}
            <FaYoutube size={32} color="red" /> <span>Youtube</span>
          </Link>
        </span>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <CiSearch size={20} />
        </div>
      </div>

      <div className="nav-right flex-div">
        <span>
          {" "}
          <RiVideoUploadFill color="red" size={26} />
        </span>
        <span>
          {" "}
          <IoIosMore size={26} />
        </span>
        <span>
          {" "}
          <IoMdNotifications size={26} />
        </span>
        <img
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          className="user-icon"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Header;
