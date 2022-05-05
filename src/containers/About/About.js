import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <article className="first">
        <div>
          <p>Served Over</p> <span>356, 728</span>
          <p>people around 50+ countries</p>
        </div>
      </article>
      <article className="second">
        <h3>About Us</h3>
        <h1>
          We’ve funded 42,113 water projects for 9.6 million people around the
          world.
        </h1>
        <p>
          Inspires employees and organizations to support causes they care
          about. We do this to bring more resources to the nonprofits that are
          changing our world.
        </p>
        <button>learn more</button>
      </article>
    </section>
  );
};

export default About;
