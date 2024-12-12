import React from "react";
import "./experience.css";
import Card from "./card";
import { Data } from "../../constants";

const experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section-title">Experience.</h2>
      <p style={{ marginBottom: "1.5rem", textAlign: "justify" }}>
        The following experiences showcase the foundation of my journey,
        including academic achievements and initial professional roles. Each
        entry highlights the skills I developed, the challenges I tackled, and
        the knowledge I gained, reflecting my commitment to growth and passion
        for learning.
      </p>
      <div className="experience-container grid">
        <div className="timeline grid">
          {Data.map((exp, index) => {
            if (exp.category === "education") {
              return (
                <Card
                  key={index}
                  icon={exp.icon}
                  title={exp.title}
                  year={exp.year}
                  desc={exp.desc}
                />
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((exp, index) => {
            if (exp.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={exp.icon}
                  title={exp.title}
                  year={exp.year}
                  desc={exp.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default experience;
