import React from "react";
import "../assets/css/skills.css";
import SkillSection from "./skillSection";

class Skills extends React.Component {
  render() {
    return (
      <div>
        <div className="main" id="skills">
          <div className="skills-header-div">
            <h1 className="skills-header">What i do ?</h1>
          </div>
        </div>
        <SkillSection />
      </div>
    );
  }
}

export default Skills;
