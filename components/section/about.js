import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
// import avatar from "../../images/rsz_1self_portrait30.jpg";
import { srConfig, github } from "../../config";
import styled from "styled-components";
import { theme, mixins, media, Section, Heading } from "../../styles/index";
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;
const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const StyledContent = styled.div`
  width: 60%;
  max-width: 720px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  height: max-content;
  margin: 20px 0 0 0;
  list-style: none;
`;

const SkillHeading = styled.li`
  position: relative;

  margin-bottom: 10px;

  font-family: ${fonts.JetBrainsMono};
  font-size: ${fontSizes.md};
  color: ${colors.blue};
`;

const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${fonts.JetBrainsMono};
  font-size: ${fontSizes.smish};
  color: ${colors.slate};
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${colors.blue};
    font-size: ${fontSizes.sm};
    line-height: 12px;
  }
`;
const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
  a {
    &:focus {
      outline: 0;
    }
  }
`;
const StyledAvatar = styled.img`
  position: relative;
  mix-blend-mode: multiply;

  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.blue};
  margin-left: -20px;
  &:hover,
  &:focus {
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.darkNavy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.blue};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const About = (data) => {
  const {
    title,
    avatar,
    languages,
    frameworks,
    tools,
    contentHtml,
  } = data.frontmatter;
  //   const revealContainer = useRef(null);
  //   useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);
  //   console.log(avatar);
  return (
    <StyledContainer id="about">
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          <SkillsWrapper>
            <SkillsContainer>
              <SkillHeading>{"LANGUAGES"}</SkillHeading>
              {languages &&
                languages.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
            <SkillsContainer>
              <SkillHeading>{"FRAMEWORKS"}</SkillHeading>
              {frameworks &&
                frameworks.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
            <SkillsContainer>
              <SkillHeading>{"TOOLS"}</SkillHeading>
              {tools && tools.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </SkillsWrapper>
        </StyledContent>

        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar src={avatar} alt={"Avatar"}></StyledAvatar>
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
