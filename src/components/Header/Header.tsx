import React, { useState } from "react";
import "./header.css";
import logo from "../../Assets/images/logo.png";
import menuIcon from "../../Assets/images/menu.png";
export default function Header() {
  const [menuListShow, setMenuListShow] = useState(false);
  const toggleMenu = () => {
    setMenuListShow(!menuListShow);
  };
  return (
    <div className="navbar">
      <img src={logo} className="logo" />
      <nav>
        <ul
          id="menulist"
          style={menuListShow ? { maxHeight: "130px" } : { maxHeight: "0px" }}
        >
          <li>
            <a href="">Game Controllers</a>
          </li>
          <li>
            <a href="">VR Accessories</a>
          </li>
          <li>
            <a href="">Media Remotes</a>
          </li>
          <li>
            <a href="">Others</a>
          </li>
        </ul>
      </nav>
      <img src={menuIcon} className="menu-icon" onClick={toggleMenu} />
    </div>
  );
}
