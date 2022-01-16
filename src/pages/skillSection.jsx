import React from "react";
import SoftwareLogos from "../components/softwareLogos";
import { skills } from "../components/portfolio";

class SkillSection extends React.Component {
  render() {
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <div className="skills-image-div">
                {/* <GetSkillSvg fileName={skill.fileName} theme={theme} /> */}
              </div>

              <div className="skills-text-div">
                <h1 className="skills-heading">{skill.title}</h1>
                <SoftwareLogos logos={skills.softwareSkills} />
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p className="subTitle skills-text">{skillSentence}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
