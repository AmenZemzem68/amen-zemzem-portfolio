import React from "react";
import "./projects.css";
import { Tilt } from "react-tilt";
import { mProjects } from "../../constants/index";
import { FaGithub } from "react-icons/fa6";

const projects = () => {
  return (
    <section className="projects container section" id="projects">
      <h2 className="section-title">Projects.</h2>
      <p>
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </p>
      <div className="project-container grid">
        {mProjects.map((project, index) => (
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            key={index}
          >
            <div className="project-card">
              <div className="project-thumb">
                <a href={project.source_code_link} target="_blank">
                  <span className="project-category">
                    <FaGithub style={{ fontSize: "24px" }} />
                  </span>
                </a>
                <a href="">
                  <img
                    src={project.image}
                    alt=""
                    style={{ width: "100%", height: "180px" }}
                  />
                </a>
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-meta">
                  {project.tags.map((tag, index) => (
                    <span key={index} style={{ color: tag.color }}>
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default projects;
