import React from "react";
import { companyData } from "../../configs/externalUrl";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="right__panel">
        <img src={companyData.navLogo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="left__panel">
        <ul>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
          <li>Kids</li>
          <li>
            <i className="fa-solid fa-bell">
              <span>0</span>
            </i>
          </li>
          <li>
            <img src={companyData.userLogo} alt="" />
          </li>
          <li>
            <i className="fa-solid fa-caret-down"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
