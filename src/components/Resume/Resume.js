import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

function Resume({ menu, changeMenu }) {
  useEffect(() => {
    changeMenu(1);
  }, [changeMenu]);

  return (
    <div className="resume">
      <div className="resume__header">
        <h1 className="myname">Okikiola Omotosho</h1>
        <p className="mystack">Frontend Developer</p>
      </div>

      <div className="resume__description">
        <p className="word">
          A Frontend developer aspiring to become a fullstack javascript
          developer, I love bringing out ideas to live with my coding skills, I
          develop websites with good UI and responsiveness that will make the
          browsers proud. Highly skilled in implementing core frontend
          development tasks including API integration, Proficient in liasing
          with team members and remote client to effectively conduct requirement
          gathering and optimize solution as per client requirements.
        </p>
      </div>

      <div className="skills">
        <div className="section__header">
          <p className="section__type">Skills</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          HTML/CSS, SASS, Javascript, React, Styled Components, Git, EJS,
          Netlify, Heroku, Search Engine Optimisation.
        </div>
      </div>

      {/* <div className="Experience">
        <div className="section__header">
          <p className="section__type">Experience</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero esse
          labore illo debitis rerum minus quaerat quas quo, voluptatibus veniam
          sequi odit velit cupiditate ex hic quasi dignissimos dolor distinctio
          vitae? Ipsam asperiores repellendus, sunt doloribus ut nesciunt
          ducimus sed necessitatibus officia, consequatur illo dolores aut
          facere, quae earum placeat tempore ullam consectetur suscipit dolorem
          excepturi. Fuga nisi atque deserunt laudantium iusto eius ullam,
          nesciunt at sit cupiditate? Error est, dignissimos fugit libero,
          beatae possimus aspernatur enim porro maiores asperiores consequatur
          atque pariatur, itaque eligendi! Aliquid incidunt eos quia repellat
          harum corporis cumque? Odit, dolorum similique tempore fuga architecto
          rem.
        </div>
      </div> */}

      <div className="Education">
        <div className="section__header">
          <p className="section__type">Education</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body education">
          Bsc. Electrical and Electronics Engineering at Obafemi Awolowo
          University <span className="education__year">2018-Present</span>
        </div>
      </div>

      <div className="Projects">
        <div className="section__header">
          <p className="section__type">Projects</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          Links to my works can be found on{" "}
          <Link to="/work">okikiola.dev/work</Link>
        </div>
      </div>
    </div>
  );
}

export default Resume;
