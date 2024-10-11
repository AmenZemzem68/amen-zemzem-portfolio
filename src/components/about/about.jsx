import React from "react";
import "./about.css";
import Me from "../../assets/me-01.png";
import Skills from "../skills/skills";
import CV from "../../assets/amen-zemzem-cv-en.pdf";

const about = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me.</h2>
      <div className="about-container grid">
        <img src={Me} alt="" className="about-img" style={{ width: "150px" }} />
        <div className="about-data">
          <div className="about-info">
            <p className="about-description">
              I'm a skilled web developer with experience in HTML , CSS , PHP
              and JavaScript, and expertise in frameworks like React JS and
              Laravel. I'm a quick learner and collaborate closely with clients
              to create efficient, scalable, and user-friendly solutions that
              solve real-world problems. Let's work together to bring your ideas
              to life!
            </p>
            <a href={CV} target="_blank" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default about;
