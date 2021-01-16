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
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 2,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 3,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 4,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 5,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 6,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 7,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 8,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 9,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
    {
      id: 10,
      title: "Project Title",
      language: "React + Material UI",
      info: "Built with react and material UI",
      live: "",
      github: "",
    },
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

                <small>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    {" "}
                    <GitHubIcon /> Github{" "}
                  </a>
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Work;
