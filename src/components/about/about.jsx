import React from "react";
import "./about.css";
import amen from "../../assets/Me-01.png";
import Skills from "../skills/skills";
import CV from "../../assets/cv_amen_zemzem.pdf";

const about = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title">About Me.</h2>
      <div className="about-container grid">
        <img
          src={amen}
          alt=""
          className="about-img"
          style={{ width: "400px" }}
        />
        <div className="about-data">
          <div className="about-info">
            <p className="about-description">
              I'm a skilled web developer with experience in HTML, CSS, C#, and
              JavaScript, and expertise in frameworks like React JS and .NET. I
              have a passion for graphic design and a keen eye for aesthetics,
              which I incorporate into my web development projects to create
              visually appealing and functional designs. I'm a quick learner and
              collaborate closely with clients to create efficient, scalable,
              and user-friendly solutions that solve real-world problems. Let's
              work together to bring your ideas to life!
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
