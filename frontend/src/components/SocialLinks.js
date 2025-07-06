import React from "react";
import "./SocialLinks.css";

// Replace with your actual profile URLs
const links = [
  {
    text: "CV",
    icon: "fas fa-file-alt",
    url: "https://raw.githubusercontent.com/SondreBolland/CV/master/CV%20english%202025.pdf",
  },
  {
    text: "GitHub",
    icon: "fab fa-github",
    url: "https://github.com/SondreBolland",
  },
  {
    text: "Hear my name",
    icon: "fa fa-volume-up",
	type: "audio",
    url: "/static/audio/sondre_sæther_bolland.mp3",
  },
  {
    text: "Email",
    icon: "fas fa-envelope",
    url: "mailto:sondre.bolland@uib.no",
  },
];


export default function SocialLinks() {
  const handleClick = (link, e) => {
    if (link.type === "audio") {
      e.preventDefault();
      const audio = new Audio(link.url);
      audio.play().catch((err) => {
        console.error("Failed to play audio:", err);
      });
    }
  };

  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="social-button"
          target="_blank"
          rel="noopener noreferrer"
          title={link.text}
          onClick={(e) => handleClick(link, e)}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
}