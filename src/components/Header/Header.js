import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import mylogo from "../../assets/mylogopng.png";


function Header({ menuBar, setMenuBar }) {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="logo">
          <Link to="/">
            <img src={mylogo} alt="my logo" className="my__logo"/>
          </Link>{" "}
        </div>
        <div className="menu__btn" onClick={() => setMenuBar(!menuBar)}>
          <div
            className={`menu__bar one ${menuBar ? "menubar__transform" : ""}`}
          ></div>
          <div
            className={`menu__bar second ${
              menuBar ? "menubar__secondtransform" : ""
            }`}
          ></div>
          <div
            className={`menu__bar third ${
              menuBar ? "menubar__thirdtransform" : ""
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
