import React from "react";
import "./Navbar.css";

import { MdSearch } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import blackLogo from "../../assets/blackLogo.png";

const Navbar = () => {
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
        <button className="btn_last"></button>
      </div>
    </div>
  );
};

export default Navbar;
