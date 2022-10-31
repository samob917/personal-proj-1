import React from "react";
import headshot from "../images/Me.jpg";
import linkedin from "../images/linkedin.png";
import mail from "../images/Mail.png";
export default function Info() {
  return (
    <div className="info">
      <img className="headshot" src={headshot} alt="Photo of me"></img>
      <h1>Sam Oberly</h1>
      <h4>Data Scientist</h4>
      <p>samoberly.website</p>
      <div className="info--buttons">
        <button className="email--button">
          <img src={mail}></img>
          <p>Email</p>
        </button>
        <button className="linkedin--button">
          <img src={linkedin} alt="img not working"></img>
          <p>LinkedIn</p>
        </button>
      </div>
    </div>
  );
}
