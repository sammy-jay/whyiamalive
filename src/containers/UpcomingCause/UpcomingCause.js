import React from "react";
import "./UpcomingCause.css";
import upcause from "../../assets/upcoming-cause.png";

const UpcomingCause = () => {
  return (
    <section className="upcomingcause">
      <article>
        <h3>Upcoming Cause</h3>
        <h1>Support Nahid for His pneumonia treatment</h1>
        <p>
          Inspires employees and organizations to support causes they care
          about. We do this to bring more resources to the nonprofits that are
          changing our world.
        </p>
        <div className="btnholder">
          <div>
            <span>Target :</span>
            <h4>$2783</h4>
          </div>
          <div>
            <span>Raised :</span>
            <h4>$1530</h4>
          </div>
          <div>
            <button>donate now</button>
          </div>
        </div>
      </article>
      <article className="imageholder">
        <img src={upcause} alt="" />
      </article>
    </section>
  );
};

export default UpcomingCause;
