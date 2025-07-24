import React from "react";
import "./Pages.css";
import MainContentLayout from "../components/MainContentLayout";

export default function HomePage() {
  return (
    <MainContentLayout>
      <div className="header-container">
        <h1>About Me</h1>
      </div>
      <p>
        I'm a PhD candidate in Computer Science Didactics at the <a href="https://www.uib.no/ii">Department of
        Informatics, University of Bergen</a>. My academic background includes a
        Master's degree in Informatics with a focus on Logic (2021), and a
        Bachelor's degree in Cognitive Science specialising in Informatics
        (2019).
      </p>
      <p>
        My research is centred around improving how programming is taught in
        higher education. I'm particularly interested in how students' prior
        knowledge can be better understood and used to inform course design in
        introductory programming. In addition, I investigate how a student's
        sense of belonging — to their peers, institution, and academic
        discipline — impacts their engagement, performance, and persistence in
        computer science.
      </p>
      <p>
        I currently lead the project{" "}
        <b>PIKA: Prior Informatics Knowledge Assessment</b>, an international
        initiative aimed at mapping students' programming knowledge before they
        begin university. PIKA is developed in collaboration with instructors
        from Norway and Sweden, and in 2024 it was completed by over 3,200
        students across nine institutions. See <b><a href="https://sondrebolland.com/projects">Projects</a></b> for further information.
      </p>
      <p>
        I love learning for research and education, but also for random skills
        and party tricks. Take a look at <b><a href="https://sondrebolland.com/learning">Learning</a></b>.
      </p>
    </MainContentLayout>
  );
}
