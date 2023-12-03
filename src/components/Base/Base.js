import React from "react";
import { Link } from "react-router-dom";
import "./Base.css";

import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CallMadeIcon from "@material-ui/icons/CallMade";

function Base({ menu, changeMenu }) {
  return (
    <div className="base">
      <div className="intro">
        <h1 className="intro__header">
          Hello! I'm
          <br />
          Okikiola Omotosho.
        </h1>

        <div className="intro__body">
          I'm a <span className="highlight">Mobile Engineer</span>. skilled in harnessing the power of
          both <span>React Native</span> and <span>SwiftUI</span> development to
          craft exceptional applications. I blend the efficiency of
          cross-platform development with the precision of native iOS to deliver
          seamless and polished user experiences, My passion lies in the
          intersection of innovation and usability on bringing design ideas to
          life by transforming concepts into beautiful, functional and well
          performant mobile applications. My expertise lies in creating
          innovative and efficient solutions that not only meet but exceed the
          expectations of users. Join me on a journey where the best of React
          Native and native iOS converge to build extraordinary mobile
          solutions. Let's turn ideas into impeccable realities!
        </div>
      </div>

      <nav className="menus">
        <ul>
          <li className={`list__item ${menu === 0 ? "active" : ""}`}>
            00 <span className="width"></span>
            <Link to="/"> Work</Link>
          </li>

          <li className={`list__item ${menu === 1 ? "active" : ""}`}>
            01 <span className="width"></span>
            <Link to="/resume"> Resume</Link>
          </li>

          <li className={`list__item ${menu === 2 ? "active" : ""}`}>
            02 <span className="width"></span>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="bottom__parts">
        <div className="social__icons">
          <div className="icons__title">
            <a href="https://github.com/omotoshogyro">
              <GitHubIcon className="icon" />
              <p className="icon__type">Github</p>
              <CallMadeIcon className="arrow icon" />
            </a>
          </div>

          <div className="icons__title">
            <a href="https://twitter.com/computer_adikt">
              <TwitterIcon className="icon" />
              <p className="icon__type">Twitter</p>
              <CallMadeIcon className="arrow icon" />
            </a>
          </div>
          <div className="icons__title">
            <a href="https://www.linkedin.com/in/okikiolaomotosho">
              <LinkedInIcon className="icon" />
              <p className="icon__type">LinkedIn</p>
              <CallMadeIcon className="arrow icon" />
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
    </div>
  );
}

export default Base;
