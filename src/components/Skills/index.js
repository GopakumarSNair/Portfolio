import React from "react";
import Icon1 from '../../images/web-design.svg';
import Icon2 from '../../images/servers.svg';
import Icon3 from '../../images/server.svg';
import {
  SkillsContainer,
  SkillsH1,
  SkillsWrapper,
  SkillsH2,
  SkillsP,
  SkillsCard,
  SkillIcon,
} from "./SkillsElements";

const Skills = () => {
  return (
    <>
      <SkillsContainer id="skills">
        <SkillsH1>Skills</SkillsH1>
        <SkillsWrapper>
          <SkillsCard>
            <SkillIcon src={Icon1} />
            <SkillsH2>Front End Development</SkillsH2>
            <SkillsP>HTML  CSS  Javascript</SkillsP>
            <SkillsP>ReactJS</SkillsP>
          </SkillsCard>
          <SkillsCard>
            <SkillIcon src={Icon2} />
            <SkillsH2>Server Side Development</SkillsH2>
            <SkillsP>NodeJS</SkillsP>
            <SkillsP>ExpressJS</SkillsP>
          </SkillsCard>
          <SkillsCard>
            <SkillIcon src={Icon3} />
            <SkillsH2>Database</SkillsH2>
            <SkillsP>PostgreSQL</SkillsP>
            <SkillsP>MongoDB</SkillsP>
          </SkillsCard>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
