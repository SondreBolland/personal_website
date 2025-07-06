import React from "react";
import NavBar from "./NavBar";
import SocialLinks from "./SocialLinks";
import "./TopPane.css";

export default function TopPane() {
  return (
    <>
      <div className="top-pane">
        <div className="top-pane-content">
          <img
            src="/static/images/Sondre.jpg"
            alt="Me"
            className="profile-image"
          />
          <div className="title-container">
            <h1>Sondre Sæther Bolland</h1>
          </div>
          <SocialLinks />
        </div>
      </div>
      <div className="nav-bar-container">
        <NavBar />
      </div>
    </>
  );
}
