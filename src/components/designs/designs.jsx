import React, { useState } from "react";
import "./designs.css";
import { Tilt } from "react-tilt";
import { mProjects } from "../../constants/index";
import { mDesigns } from "../../constants/index";
import { FaBehance } from "react-icons/fa6";

const Designs = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? mDesigns
      : mDesigns.filter((project) => project.type === filter);

  const uniqueTypes = [
    "All",
    ...new Set(mDesigns.map((project) => project.type)),
  ];

  return (
    <section className="projects container section" id="designs">
      <h2 className="section-title">Creative Works.</h2>
      <p style={{ textAlign: "justify", marginBottom: "2rem" }}>
        The Creative Works section highlights my design projects, showcasing my
        passion for graphic design and creativity. Each piece reflects my skills
        in Adobe Illustrator and other design tools, and demonstrates my ability
        to blend aesthetics with functionality. The designs featured here are a
        mix of personal projects and visual work that express my unique approach
        to design and problem-solving.
      </p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {uniqueTypes.map((type) => (
          <button
            key={type}
            className={`filter-button ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="project-container grid">
        {filteredProjects.map((project, index) => (
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
                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="project-category">
                    <FaBehance style={{ fontSize: "24px" }} />
                  </span>
                </a>
                <a href="">
                  <img
                    src={project.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "180px",
                    }}
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

export default Designs;
