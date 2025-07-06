import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>Sondre Sæther Bolland</h3>
        <p>PhD Candidate</p>
        <p>
          <a href="mailto:sondre.bolland@uib.no">
            sondre.bolland@uib.no
          </a>
        </p>

        <p>
          The Department of Informatics<br />
          The University of Bergen
        </p>

        <div className="social-links">
          <a
            href="https://www4.uib.no/finn-ansatte/Sondre.S%C3%A6ther.Bolland"
            target="_blank"
            rel="noopener noreferrer"
          >
            Employee Page
          </a>
          <a
            href="https://scholar.google.com/citations?user=6tT_oZAAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          <a
            href="https://www.linkedin.com/in/sondre-bolland-11b7a6163/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
