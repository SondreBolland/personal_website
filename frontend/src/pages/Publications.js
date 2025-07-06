import React, { useState } from "react";
import MainContentLayout from "../components/MainContentLayout";

const publications = [
  {
    id: "K-12Change",
    title:
      "How Introduction of Programming to the K-12 Curriculum Influences Prior Knowledge for CS1 (PREPRINT)",
    authors: "Sondre Bolland, Torstein Strømme",
    venue: "CompEd '25: ACM Global Computing Education Conference 2025",
    link: "https://github.com/SondreBolland/Research-Projects/blob/master/How_K_12_Curriculum_Change_Influence_Prior_Knowledge_in_CS1_PREPRINT.pdf",
    abstract:
      "In 2020, the Norwegian curriculum in K-12 education (ISCED 1-3) was reformed to include computational thinking as a core element, and programming has since been integrated in subjects such as mathematics, science and arts. Starting with those who graduated from upper secondary school in 2023, Norwegian university freshmen will now have been exposed to programming with Python in their mathematics courses throughout upper secondary school. This newfound prior knowledge of programming in the student body could potentially have a significant effect on how introduction to programming in higher education (CS1) should be taught. \n\nWe analyze results of the Prior Informatics Knowledge Assessment (PIKA), which was administered to n = 3, 038 students that were about to begin their CS1 studies in one of eight different higher education institutions in Norway. We find that students who graduated from upper secondary school in 2023 or 2024 (and thus experienced the new curriculum) significantly outperform those who graduated earlier. Using Hodges-Lehmann estimator for central tendency we observe a pseudo-median difference of 23.9 out of 100 points. \n\nWe find that some groups have benefited more from the curriculum change than others. In particular, students that opt for the most advanced mathematics courses gain more from the new curriculum, meaning that the prior knowledge gap has increased with respect to mathematics background. Women also gained more than men, meaning that the gap is reduced with respect to gender.",
  },
  {
    id: "nordic",
    title:
      "The Nordic Prior Knowledge Test in Programming: Motivation, Development and Preliminary Results",
    authors:
      "Sondre Bolland, Andreas Haraldsrud, Siri Jensen, Filip Strömbäck, Arne Styve, Erlend Tøssebro, Eirik Valseth, Torstein Strømme",
    venue: "Norsk IKT-konferanse for forskning og utdanning, vol. 36(4), 2024",
    link: "https://doi.org/10.5324/nikt.6216",
    abstract:
      "With recent updates to Norway's national curriculum, computational thinking and programming has become a core part of the K-12 education, leading to an influx of students entering higher education with prior programming experience. This shift has the potential to impact the teaching of ICT at universities, as foundational knowledge could allow for the introduction of more advanced topics earlier. However, the quality of programming education varies, making it essential to assess students' prior knowledge. \n\nTo address this need, the Nordic Prior Knowledge Test in Programming was designed to assess incoming students' programming proficiency in the basic elements of the introductory programming course (CS1). This study details the rationale for assessing incoming students, the development and content of the test, and the preliminary results from its 2024 administration. \n\nThe test was completed by 3,038 students (2,661 after data pruning) across eight higher education institutions in Norway. Results indicate a mean score of 39.9%, with a significantly higher performance among students exposed to the new curricular model (50%).Despite these gains, a substantial proportion of students scored at the lower end of the scale, highlighting the ongoing need for foundational programming instruction. \n\nAlthough most students will benefit from completing the standard CS1 course, a notable subset of students achieved high scores (14.7% scoring above 90%), suggesting the potential value of accelerated or alternative learning pathways, such as an advanced CS1 course or direct progression to CS2.",
  },
  {
    id: "fundamentals",
    title: "Fundamentals of Norwegian CS1",
    authors:
      "Sondre Bolland, Aleksandr Popov, Tyra Eide, Robert Kordts, Torstein Strømme",
    venue: "Norsk IKT-konferanse for forskning og utdanning, vol. 36(4), 2024",
    link: "https://doi.org/10.5324/nikt.6217",
    abstract:
      "The introductory programming course, known as CS1, has evolved considerably since its inception, with diverse opinions on the essential concepts that should be included. This study aims to identify the fundamental concepts taught in Norwegian CS1 courses in order to develop a validated assessment tool: a concept inventory. This tool will be utilized in the Nordic Prior Knowledge Test in Programming, which is designed to assess the pre-existing programming knowledge of students entering higher education. This test uses Python, the dominant programming language in K-12 and higher education in Norway. \n\nTo identify the fundamentals of CS1 we employed a triangulation approach that included three perspectives: the intended curriculum, the assessed curriculum, and the experienced curriculum. Our methodology involved a Delphi process with Norwegian CS1 educators, an analysis of final exams from various Norwegian institutions, and surveys of computer science students regarding the difficulty and importance of programming concepts. \n\nOur findings reveal that concepts related to looping, functions, conditionals and error interpreting are central to Norwegian CS1 courses, aligning with existing literature. However, we also identified notable discrepancies compared to older CS1 concept studies developed in other countries, particularly in concepts like recursion, data structures beyond arrays/lists and maps, and test design. These results underscore both the dynamic nature of computer science education and the enduring importance of foundational topics that students are expected to master.",
  },
  {
    id: "mandatoryVsVoluntary",
    title:
      "Mandatory or Voluntary Course Work in Introductory Programming Courses?",
    authors: "Sondre Bolland, Tyra Eide, Torstein Strømme",
    venue: "Norsk IKT-konferanse for forskning og utdanning, no. 4, 2023",
    link: "https://www.ntnu.no/ojs/index.php/nikt/article/view/5712",
    abstract:
      "Which approach, mandatory or voluntary weekly labs, is more conducive to student learning? We conducted a quasi-experiment in a bachelor level programming course (CS2) at the Department of Informatics at the University of Bergen. The course had maintained consistent structure, content, and faculty for the past two iterations, with one key distinction: in 2022, the weekly labs were made mandatory (n=265), whereas in 2021 they were voluntary (n=311). We compared student performance, retention, stress levels, and satisfaction between the two iterations. \n\nOur findings revealed that in the semester with mandatory labs, students demonstrated significantly better performance on an end-of-term assignment that was nearly identical for both iterations of the course. We also observed a slight increase in the retention rate for students who participated in the final exam, but this difference did not reach statistical significance. \n\nRegarding stress and workload, we employed a mixed-methods approach, utilizing both qualitative and quantitative data collected through surveys to gauge students' experience with mandatory versus voluntary assignments and how it impacts their workload. The responses revealed that students who had not experienced mandatory assignments expressed concerns about being overwhelmed with workload. However, students who had actually gone through the mandatory workload found it manageable and even viewed it as a positive aspect of their overall learning experience in the course. \n\nFinally, we compared the end-of-term anonymous course evaluations between the two years, and found no statistically significant difference in course satisfaction between the two iterations.",
  },
  {
    id: "challenges",
    title:
      "What challenges do students face in introductory STEM courses, and how can instructors help",
    authors:
      "Sondre Bolland, Emili Rønning, Tiril Try, Sehoya Cotner, Kjersti Daae, Mirjam Glessmer",
    venue: "MNT Conference, University of Stavanger 2023",
    link: "https://bioceed.uib.no/dropfolder/bioCEED/MNT2023-Bolland.pdf",
    abstract:
      'We focus here on the role of belonging in introductory STEM, especially as it may impact student performance and intention to remain in the discipline. Specifically, doubts about belonging in the classroom are often shouldered disproportionately by students from marginalized groups, which can lead to underperformance and may explain the attrition of, for example, women in the STEM pathway. To complement ongoing research on belonging, and because belonging is linked to how students perceive and manage academic challenges, we conducted a study on self-reported challenges, along with coping strategies, in introductory STEM students at the University of Bergen. Specifically, we surveyed students in an introductory computer science course (n=176), taken by all undergraduates at the Faculty of Mathematics and Natural Sciences, about their anticipated challenges, asking them to respond to a single open-ended question: Today, we\'d like each of you to reflect on some of the concerns you may have about taking this course. What do you think will be difficult or challenging for you? \n\nWe used inductive coding to categorize student responses and group these categories into broader themes. For example, a student reporting that I worry that I will not understand anything was categorized as "comprehension". Another quote Worried about coding badly and not keeping up with the rest of the class was categorized as "afraid of falling behind." Our findings are informative and, in a sense, encouraging, as many of the student concerns can be mitigated by instructional choices. We conclude with an example of how instructor behaviors can alleviate some common student concerns in introductory science courses.',
  },
  {
    id: "snafdilp",
    title:
      "Expressing Unknown Instance Relations in Program Synthesis using Neurosymbolic Methods",
    authors: "Sondre Bolland",
    venue:
      "Master Thesis, Deparment of Informatics at the University of Bergen",
    link: "https://bora.uib.no/bora-xmlui/handle/11250/2827081",
    abstract:
      "Program synthesis is the task of automatically constructing a program given a high level specification. An instance of this is Inductive Logic Programming (ILP) were discrete methods are used to construct a logic program which satisfies the specification. A limitation of a traditional ILP system is its inability to handle noise, faultering at a single mislabelled datapoint. A system which mediates this weakness is Differentiable Inductive Logic Programming (δILP), where instead of satisfying a strict requirement the task is to minimize a loss. \n\nOne limitation of δILP is that it does not allow for the use of negation in the construction of its programs. Negation as failure in logic programming is a desired tool to write programs that express unknown knowledge. By extending the system with negation we increase the expressiveness of δILP, allowing us to construct programs that are often easier to devise, write and analyse. \n\nWe propose such an extension: Stratified Negation as Failure in Differentiable Inductive Logic Programming (SNAFδILP). This system is able to learn moderately complex programs with unary and binary predicates, negation and predicate invention. The system is fairly robust to mislabelled data, in most cases satisfying the specification with up to 10 % mislabelled data.",
  },
];

export default function Publications() {
  const [expanded, setExpanded] = useState(null);

  const toggleAbstract = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <MainContentLayout>
      <div className="header-container">
        <h1>Publications</h1>
      </div>

      <div className="publications-container">
        {publications.map((pub, index) => (
          <div key={pub.id}>
            <div
              className="project-card publication-card"
              onClick={() => toggleAbstract(pub.id)}
              style={{ cursor: "pointer" }}
            >
              <h2 className="project-title">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {pub.title}
                </a>
              </h2>
              <p className="project-description">{pub.authors}</p>
              <p className="project-description">
                <em>{pub.venue}</em>
              </p>
              <p className="project-links">
                {expanded === pub.id ? "▼ Hide abstract" : "▶ Show abstract"}
              </p>
            </div>
            {expanded === pub.id && (
              <div className="abstract">
                {pub.abstract.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            )}
            {index < publications.length - 1 && (
              <hr className="project-separator" />
            )}
          </div>
        ))}
      </div>
    </MainContentLayout>
  );
}
