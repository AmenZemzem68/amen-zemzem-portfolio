import React from "react";

const card = (props) => {
  return (
    <div className="timeline-item">
      <i className={props.icon}></i>
      <span className="timline-date">{props.year}</span>
      <h3 className="timeline-title">{props.title}</h3>
      <ul style={{ listStyleType: "circle" }}>
        {props.desc.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default card;
