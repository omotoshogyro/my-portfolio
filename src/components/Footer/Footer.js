import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="social__icons">
        <div className="icons__title">
          <a href="https://github.com/omotoshogyro">
            <GitHubIcon className="icon" />
            <p className="icon__type">Github</p>
          </a>
        </div>

        <div className="icons__title">
          <a href="https://twitter.com/computer_adikt">
            <TwitterIcon className="icon" />
            <p className="icon__type">Twitter</p>
          </a>
        </div>
      </div>

      <div className="credit__section">
        <p className="credits">
          {" "}
          Inspired by{" "}
          <a href="https://dribbble.com/NicolasMzrd">
            Nicolas Meuzard
          </a> and <a href="https://sarahdayan.dev/">Sarah Dayan</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
