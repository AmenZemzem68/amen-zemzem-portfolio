import React from "react";

const card = (props) => {
  return (
    <div className="timeline-item">
      <i className={props.icon}></i>
      <span className="timline-date">{props.year}</span>
      <h3 className="timeline-title">{props.title}</h3>
      <p className="timline-text">{props.desc}</p>
    </div>
  );
};

export default card;
