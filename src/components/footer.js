import React from "react";
import fb from "../images/Facebook Icon.png";
import github from "../images/GitHub Icon.png";
import insta from "../images/Instagram Icon.png";
import twitter from "../images/Twitter Icon.png";
export default function Footer() {
  return (
    <div className="footer">
      <img src={twitter}></img>

      <img src={fb}></img>

      <img src={insta}></img>

      <img src={github}></img>
    </div>
  );
}
