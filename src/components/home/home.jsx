import React from "react";
import "./home.css";
import Me from "../../assets/me-01.png";
import HeaderSocials from "./headerSocials";
import Scroll from "./scroll";

const home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="me" className="home-img" />
        <h1 className="home-name">Amen Zemzem</h1>
        <span className="home-education">I'm a Full Stack Developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn">
          Get in touch
        </a>
        <Scroll />
      </div>
    </section>
  );
};

export default home;
