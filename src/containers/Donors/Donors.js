import React from "react";
import "./Donors.css";
import { VscSmiley } from "react-icons/vsc";
import { FaHeartbeat } from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { MdOutlineVolunteerActivism } from "react-icons/md";
const Donors = () => {
  return (
    <section className="donors">
      <div>
        <VscSmiley />
        <h2>47k</h2>
        <p>Donors</p>
      </div>
      <div>
        <FaHeartbeat />
        <h2>154K</h2>
        <p>Children Saved</p>
      </div>
      <div>
        <BsCash />
        <h2>785K</h2>
        <p>Donated</p>
      </div>
      <div>
        <MdOutlineVolunteerActivism />
        <h2>357</h2>
        <p>Volunteers</p>
      </div>
    </section>
  );
};

export default Donors;
