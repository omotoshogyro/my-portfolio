import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./MenuOverlay.css";

function MenuOverlay({ menuBar, setMenuBar }) {
  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/resume",
      name: "Resume",
    },
    {
      path: "/work",
      name: "Work",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <div className={`overlay__menu ${menuBar ? "menuBar__active" : ""}`}>
      <div className="overlay__menu__header">
        <Header menuBar={menuBar} setMenuBar={setMenuBar} />
      </div>

      <div className={`overlay__menu__content`}>
        <ul>
          {links.map(({ path, name }) => {
            return (
              <li onClick={() => setMenuBar(!menuBar)} key={name}>
                <Link to={path}>{name}</Link>
              </li>
            );
          })}

          <li>
            <div className="overlay__menu__connect">
              <div className="connect__word">Connect with me</div>
              <div className="connect__icons">
                <ul>
                  <li>
                    <a href="https://github.com/omotoshogyro">
                      <GitHubIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/computer_adikt">
                      <TwitterIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuOverlay;
