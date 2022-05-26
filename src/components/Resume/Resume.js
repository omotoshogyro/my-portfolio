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
        I'm a frontend developer, I build websites using React and mobile apps using React Native, I love bringing out ideas 
        to live with my coding skills, I
        develop websites with good UI and responsiveness that will make the browsers proud. 
        Higly skilled in implementing core frontend devevelopment
        tasks including API integration, Proficient in liasing with 
        team members and remote client to effectively conduct requirement gathering
        and optimize solution as per client 
        requirements.
        </p>
      </div>

      <div className="skills">
        <div className="section__header">
          <p className="section__type">Skills</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
          HTML, CSS/SASS, Tailwind CSS, Javascript, React, React Native, Basic NodeJS.
        </div>
      </div>
      <div className="skills">
        <div className="section__header">
          <p className="section__type familiar">TOOLS I HAVE WORKED WITH</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">
        Context API, Redux,  Firebase, Styled Component, React Native CLI,Animated API, Expo, Git, PWA's, NodeJS, Express, MongoDB, Web Sockets, SEO.
        </div>
      </div>

      <div className="Experience">
        <div className="section__header">
          <p className="section__type">Experience</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body">

        <div className="job">
            <p className="job__title">
            FEATHER AFRICA, <span>FRONTEND DEVELOPER</span>
            </p>
            <p className="job__duration">FEBRUARY 2022</p>
            <p className="about__job">
            I joined the feather africa enginering team in building a fintech platform, Built complex layouts and design 
            with pixel perfect and high level user interactions and performance, I implemented functionalities such as
            Receipt generations and sharing, Peer to Peer user searching  e.t.c
            </p>
          </div>

        <div className="job">
            <p className="job__title">
              Haul247, <span>FRONTEND DEVELOPER (Web & Mobile)</span>
            </p>
            <p className="job__duration">NOVEMBER 2021 - JANUARY 2022</p>
            <p className="about__job">
            Built the mobile app and website for a cargo delivery company using ReactJS and Styled component
            for the web and React native and Typescript for the Mobile app,  Implemented the API's and built figma
            components, Added a licence upload and complete verification, I also implemented the dashboard for
            the client app which shows the statistics about the drivers and their location and distance distance 
            travelled.
            </p>
          </div>

          <div className="job">
            <p className="job__title">
              Ikarely health, <span>frontend developer(contract)</span>
            </p>
            <p className="job__duration">december 2020 - june 2021</p>
            <p className="about__job">
              I joined the team of health care professionals and software
              engineers in building an health care service platform, Implemented
              the API's and built figma components using REACT JS, CSS and
              Material UI managed the app state using MobX and Context API.
            </p>
          </div>

          <div className="job">
            <p className="job__title">
              Enye Cohort, <span>frontend developer(Test)</span>
            </p>
            <p className="job__duration">march 2021</p>
            <p className="about__job">
              Created User interface based on the datas we get back from the API
              provided to us and also integrated the API to the project, Added
              some functionality such as filtering, searching and pagination
              with a bit of animated flow using CSS animations.
            </p>
          </div>

          <div className="job">
            <p className="job__title">
              Africonnect, <span>Backend Developer (Intern)</span>
            </p>
            <p className="job__duration">march 2021 - may 2021</p>
            <p className="about__job">
              Created some API logics and functionalities with POSTGRESS,
              Sequelize and NodeJS with the guide of the backend engineers and
              also Worked closely with a team of mentors, PM, frontend
              developers and backend developers.
            </p>
          </div>
        </div>
      </div>

      <div className="Education">
        <div className="section__header">
          <p className="section__type">Education</p>
          <div className="horizontal__line"></div>
        </div>

        <div className="section__body education">
          Bsc. Electrical and Electronics Engineering at Obafemi Awolowo
          University <span className="education__year">2018 - Till Date</span>
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
