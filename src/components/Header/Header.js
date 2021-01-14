import React from "react";
import CallMadeIcon from "@material-ui/icons/CallMade";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Header.css";

function Header({ menuBar, setMenuBar }) {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="logo">
          {" "}
          <h3>Okikiola.dev</h3>{" "}
        </div>
        <div className="menu__btn" onClick={() => setMenuBar(!menuBar)}>
          {/* {menuBar ? <CallMadeIcon /> : <GitHubIcon />} */}
          <div className={`menu__bar one ${menuBar ? 'menubar__transform' : ''}`}></div>
          <div className={`menu__bar second ${menuBar ? 'menubar__secondtransform' : ''}`}></div>
          <div className={`menu__bar third ${menuBar ? 'menubar__thirdtransform' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
