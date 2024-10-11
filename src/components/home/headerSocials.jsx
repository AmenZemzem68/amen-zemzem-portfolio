import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa6";

const headerSocials = () => {
  return (
    <div className="home-socials">
      <a
        href="https://www.instagram.com/amen_zemzem"
        className="home-social-link"
        target="_blank"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.linkedin.com/in/amenzemzem/"
        className="home-social-link"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://www.facebook.com/zemzem.amen.3"
        className="home-social-link"
        target="_blank"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://github.com/AmenZemzem68"
        className="home-social-link"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default headerSocials;
