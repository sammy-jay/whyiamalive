import React from "react";
import Service from "../../components/Service";
import "./Services.css";
import { BsBook } from "react-icons/bs";
import { RiMedicineBottleLine } from "react-icons/ri";
import { GiFoodTruck } from "react-icons/gi";
const Services = () => {
  return (
    <section className="servicessection" id="services">
      <span>We Work For You</span>
      <h3>We Serve People</h3>
      <section className="serviceholder">
        <Service
          Icon={GiFoodTruck}
          title="Pure Food & Water"
          desc="Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are"
        />
        <Service
          Icon={RiMedicineBottleLine}
          title="Medicine"
          desc="Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are"
        />
        <Service
          Icon={BsBook}
          title="Education"
          desc="Inspires employees and organizations to support causes they care about. We do this to bring more resources to the nonprofits that are"
        />
      </section>
    </section>
  );
};

export default Services;
