import React from "react";
import { Tilt } from "react-tilt";
import Image1 from "../../assets/angular.png";
import Image3 from "../../assets/wordpress.png";
import Image4 from "../../assets/illustrator.png";
import "./skills.css";
const data = [
  {
    id: 1,
    image: Image1,
    title: "Web Development",
    description:
      "Building responsive WordPress sites with Elementor & custom development.",
  },
  {
    id: 2,
    image: Image3,
    title: "Wordpress Development",
    description:
      "Building responsive WordPress sites with Elementor & custom development.",
  },
  {
    id: 3,
    image: Image4,
    title: "Graphic Design",
    description:
      "Creating logos, character designs, and marketing materials using Illustrator.",
  },
];
const skills = () => {
  return (
    <section className="services container" style={{ paddingTop: "3rem" }}>
      <h2 className="section-title">Services.</h2>
      <div className="services-container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              key={id}
            >
              <div className="services-card green-pink-gradient shadow-card">
                <img src={image} alt={title} className="services-img" />
                <h3 className="services-title">{title}</h3>
                <p className="services-description">{description}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default skills;
