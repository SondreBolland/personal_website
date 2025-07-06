import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "PIKA: Prior Informatics Knowledge Assessment",
    description:
      "How programming proficient are incoming university students? PIKA is an international project for the mapping of the programming knowledge and skill of CS1 students.",
    website: "https://pika-test.org",
    github: "https://github.com/IngmarForsberg/Nordic-Programming-Test",
  },
  {
    title: "FestPlay - Festival Playlist Generator",
    description:
      "Get ready for your next festival or concert! This web app helps you generate personalized Spotify playlists based on what your favorite artists most frequently perform live.",
    website: "https://sondrebolland.com/projects/festplay",
    github: "https://github.com/SondreBolland/FestPlay",
  },
  {
    title: "This website - sondrebolland.com",
    description:
      "This website was made to showcase my academic and personal projects, in addition to teach myself about web development.",
    website: "https://sondrebolland.com",
    github: "https://github.com/SondreBolland/personal_website",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="main-content-layout">
      <div className="header-container">
        <h1>Projects</h1>
      </div>
      {projects.map((project, index) => (
        <div key={index}>
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <div className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <p className="project-links">
                🌐 Website |{" "}
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg"
                  alt="GitHub"
                  className="github-icon"
                />{" "}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              </p>
            </div>
          </a>
          {index < projects.length - 1 && <hr className="project-separator" />}
        </div>
      ))}
    </div>
  );
}
