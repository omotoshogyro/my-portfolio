import React from "react";
import {Link} from 'react-router-dom'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__intro">
        <h1 className="home__intro__header">Hello! I'm <span id='forName'>Okikiola Omotosho.</span></h1>

        <div className="home__intro__body">
          I'm a <span>Frontend Developer</span> . I spend most of my time
          writing code for application using Javascript . I use CSS and SASS to
          create efficient user experience. I love talking about tech and also
          write on my blog ocassionally.
        </div>


        <div className="explore__btn">
          <button> <Link to='/work'>Explore </Link> </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
