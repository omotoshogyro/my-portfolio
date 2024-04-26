import React, { useEffect } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Work.css";
function Work({ menu, changeMenu }) {
  useEffect(() => {
    changeMenu(0);
  }, [changeMenu]);

  const projects = [
    {
      id: 1,
      title: "KLOZA",
      language: "React Native",
      info: "A social media like application to connect africans together",
      live: "https://www.kloza.app/",
      // github: "",
    },
    {
      id: 1,
      title: "FEATHER",
      language: "React Native",
      info: "A POS system like Fintech application with a special feature of depositing and withdrawing.",
      live: "https://play.google.com/store/apps/details?id=feather.peer",
      // github: "",
    },
    {
      id: 2,
      title: "MUNCH UK",
      language: "React Native",
      info: "A food ordering mobile application",
      live: "https://play.google.com/store/apps/details?id=com.munchconsumer.app",
      // github: "https://github.com/Haul247-Tech/client-mobile",
    },
    {
      id: 2,
      title: "HAUL247",
      language: "React Native",
      info: "A mobile app for a cargo delivery company.",
      live: "exp://exp.host/@gyroscope/haul247-mobile",
      // github: "https://github.com/Haul247-Tech/client-mobile",
    },
    {
      id: 3,
      title: "IKARELY",
      language: "React + Material UI+ Tailwind",
      info: "A health care startup, bringing healthcare to doorstep.",
      live: "https://ikarely.netlify.app/",
      // github: "",
    },
    {
      id: 4,
      title: "FOODLY",
      language: "React, CSS ",
      info: "A Random food app UI from figma comummity.",
      live: "https://foodly-design.netlify.app/",
      github: "https://github.com/omotoshogyro/food-app",
    },
    // {
    //   id: 5,
    //   title: "ENYE Test",
    //   language: "React, CSS",
    //   info: "A frontend test for the ENYE Cohort Internship.",
    //   live: "https://enyeprofiles.netlify.app/",
    //   github: "https://github.com/omotoshogyro/enye-frontend",
    // },

    
  ];

  return (
    <div className="for__boxes">
      {projects.map(({ title, language, info, live, github, id }) => {
        return (
          <div className="project__container" key={id}>
            <div className="eachproject__box">
              <div className="project__details">
                <h3> {title} </h3>
                <small> {language} </small>
                <p> {info} </p>
              </div>

              <div className="project__links">
                <small>
                  <a href={live} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <LanguageIcon />
                    Live{" "}
                  </a>
                </small>

                {github && <small>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <GitHubIcon /> Github{" "}
                  </a>
                </small>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Work;
