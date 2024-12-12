import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../assets/logo-01.png";
import {
  GoHome,
  GoPerson,
  GoMortarBoard,
  GoStack,
  GoCommentDiscussion,
  GoX,
} from "react-icons/go";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";

const sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav-logo">
          <img src={Logo} alt="Logo" />
        </a>

        <nav className="nav">
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  <GoHome />
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <GoPerson />
                </a>
              </li>
              <li className="nav-item">
                <a href="#experience" className="nav-link">
                  <GoMortarBoard />
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  <GoStack />
                </a>
              </li>
              <li className="nav-item">
                <a href="#designs" className="nav-link">
                  <HiOutlinePaintBrush />
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <GoCommentDiscussion />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav-footer">
          <span className="copyright">&copy; Amen Zemzem 2024</span>
        </div>
      </aside>
      <div
        className={toggle ? "nav-toggle nav-toggle-open" : "nav-toggle"}
        onClick={() => showMenu(!toggle)}
      >
        {toggle ? <GoX fontSize={22} /> : <GiHamburgerMenu fontSize={22} />}
      </div>
    </>
  );
};

export default sidebar;
