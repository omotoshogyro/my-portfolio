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
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 2,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 3,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 4,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 5,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 6,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 7,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 8,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 9,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
    },
    {
      id: 10,
      title: "Checkmate",
      language: "React",
      info: "Sign up Portal for checkmate Africa",
      live: "checkmate.com",
      github: "github.com/checkmate",
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
