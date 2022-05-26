import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__intro">
        <h1 className="home__intro__header">
          Hello! I'm <span id="forName">Okikiola Omotosho.</span>
        </h1>

        <div className="home__intro__body">
          I'm a <span>Frontend Developer</span>. I love bringing out ideas to
          live with my coding skills. I use Javascript, React and React Native to implement
          high end functionalities and user experience, My greatest strength is my
          ability to adapt and learn.
        </div>

        <div className="explore__cover">
          <Link to="/work">
            <button className="explore__btn">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
