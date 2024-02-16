import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { MdSearch } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import blackLogo from "../../assets/blackLogo.png";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const [lightMode, setLightMode] = useState(false);

  const changeTheme = () => {
    setLightMode(!lightMode);
  };
  return (
    <div className="navbar">
      <div className="inputSection">
        <input type="text" placeholder="Home" />
        <MdSearch className="icon" />
      </div>

      <div className="logoSection">
        <img src={blackLogo} alt="logo" className="navLogo" />
        <div className="trapezoid"></div>
      </div>

      <div className="navButtonsSection">
        <button className="depositBtn">Deposit</button>
        <button>Bal. 100.0</button>
        <button>Exp. 00.0</button>
        <button className="btn_last">
          <IoPersonSharp />
        </button>
        <button className="btn_last" onClick={changeTheme}>
          {lightMode ? <CiLight /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
