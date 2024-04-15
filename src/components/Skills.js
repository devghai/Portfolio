import React from 'react';
import Fade from 'react-reveal/Fade';

const Skills = () => {
  // Define your technical skills and their levels
  const technicalSkills = [
    { name: "HTML", level: 95 }, // Example: HTML skill level is 90%
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 95 },
    { name: "react.js", level: 80 },
    { name: "swift", level: 75 },
    { name: "statistics", level: 88 },
    { name: "probability", level: 85 },
    { name: "git", level: 85 },
    { name: "mySQL", level: 70 },
    { name: "Python", level: 70 },
    { name: "Calculus", level: 85 },
    { name: "Java", level: 90 },
    { name: "AWS", level: 80 },
    // Add more technical skills as needed
  ];

  // Sort the technical skills by level
  const sortedTechnicalSkills = technicalSkills.sort((a, b) => b.level - a.level);

  // Define an empty array for non-technical skills
  const nonTechnicalSkills = [
    { name: "Teamwork", level: 70 },
    { name: "Adaptability", level: 70 },
    { name: "Creativity", level: 85 },
    { name: "Solving", level: 90 },
    { name: "Curiosity", level: 80 },
    { name: "Paitence", level: 90},
    { name: "Learning", level:85},
    { name: "Scrum", level: 90},
    // Add non-technical skills here
  ];

  return (
    <div className='skills'>
      <h1><Fade bottom cascade>Technical Skills</Fade></h1>
      <div className="skills-container">
        <div className="skills-bubbles">
          {sortedTechnicalSkills.map((skill, index) => (
            <Fade key={index} bottom cascade>
              <div
                key={index}
                className="skill-bubble"
                style={{ 
                  fontSize: `${skill.level * 0.8}%` 
                }} // Adjust the scaling factor as needed
              >
                {skill.name}
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <h1><Fade bottom cascade>Non-Technical Skills</Fade></h1>
      <div className="skills-container">
        <div className="skills-bubbles">
          {nonTechnicalSkills.map((skill, index) => (
            <Fade key={index} bottom cascade>
              <div
                key={index}
                className="skill-bubble"
                style={{ 
                  fontSize: `${Math.min(100, 500 / skill.name.length)}%` // Adjust the max font size as needed
                }} // Adjust the scaling factor as needed
              >
                {skill.name}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  ); 
};

export default Skills;
