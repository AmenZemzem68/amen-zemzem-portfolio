import React from "react";
import "./experience.css";
import Card from "./card";
import { Data } from "../../constants";

const experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section-title">Experience.</h2>
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
