import React from "react";
import "./Service.css";

const Service = ({ Icon, title, desc }) => {
  return (
    <article className="service">
      <div>
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
};

export default Service;
