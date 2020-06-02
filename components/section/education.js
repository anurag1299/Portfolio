import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { theme, mixins, media, Section, Heading } from "../../styles/index";
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
  max-width: 800px;
`;
const StyledTabs = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.thone`
    display: block;
  `};
`;
const StyledTabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;

  ${media.thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `};
  ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};

  li {
    &:first-of-type {
      ${media.thone`
        margin-left: 50px;
      `};
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.thone`
        padding-right: 50px;
      `};
      ${media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;
const StyledTabButton = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 2px solid ${colors.lightNavy};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.JetBrainsMono};
  font-size: ${fontSizes.smish};
  color: ${(props) => (props.isActive ? colors.blue : colors.slate)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.lightestNavy};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors.lightNavy};
  }
`;
const StyledHighlight = styled.span`
  display: block;
  background: ${colors.blue};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${(props) =>
      props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0}px
  );
  ${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${(props) =>
        props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0}px
    );
    margin-left: 50px;
  `};
  ${media.phablet`
    margin-left: 25px;
  `};
`;
const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
  padding-left: 30px;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};

  ul {
    ${mixins.fancyList};
  }
  a {
    ${mixins.inlineLink};
  }
`;
const EducationTitle = styled.h4`
  color: ${colors.lightestSlate};
  font-size: ${fontSizes.xxl};
  font-weight: 500;
  margin-bottom: 5px;
`;
const EducationPlace = styled.span`
  color: ${colors.blue};
`;
const EducationDetails = styled.h5`
  font-family: ${fonts.JetBrainsMono};
  font-size: ${fontSizes.smish};
  font-weight: normal;
  letter-spacing: 0.05em;
  color: ${colors.lightSlate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

const Education = (data) => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
    } else {
      if (tabFocus >= tabs.current.length) {
        setTabFocus(0);
      }
      if (tabFocus < 0) {
        setTabFocus(tabs.current.length - 1);
      }
    }
  };

  useEffect(() => focusTab(), [tabFocus]);
  const onKeyPressed = (e) => {
    if (e.keycode === 38 || e.keycode === 40) {
      e.preventDefault();
      if (e.keyCode === 40) {
        // Move down
        setTabFocus(tabFocus + 1);
      } else if (e.keyCode === 38) {
        // Move up
        setTabFocus(tabFocus - 1);
      }
    }
  };
  const frontmatter = data.frontmatter;
  //console.log(data);
  return (
    <StyledContainer id="college">
      <Fade bottom>
        <Heading>Where I&apos;ve Learned</Heading>
      </Fade>
      <Fade bottom>
        <StyledTabs>
          <StyledTabList
            role="tablist"
            aria-label="Education tabs"
            onKeyDown={(e) => onKeyPressed(e)}
          >
            {frontmatter &&
              Object.keys(frontmatter).map((key, i) => {
                const { tag } = frontmatter[key];
                return (
                  <li key={i}>
                    <StyledTabButton
                      isActive={activeTabId === i}
                      onClick={() => setActiveTabId(i)}
                      ref={(el) => (tabs.current[i] = el)}
                      id={`tab-${i}`}
                      role="tab"
                      aria-selected={activeTabId === i ? "0" : "-1"}
                    >
                      <span>{tag}</span>
                    </StyledTabButton>
                  </li>
                );
              })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>
          {frontmatter &&
            Object.keys(frontmatter).map((key, i) => {
              const { title, school, range, contentHtml } = frontmatter[key];
              return (
                <StyledTabContent
                  key={i}
                  isActive={activeTabId === i}
                  id={`panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${i}`}
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  hidden={activeTabId !== i}
                >
                  <EducationTitle>
                    <span>{title}</span>
                    <EducationPlace>
                      <span>&nbsp;@&nbsp;</span>
                      <a target="_blank" rel="nofollow noopener noreferrer">
                        {school}
                      </a>
                    </EducationPlace>
                  </EducationTitle>
                  <EducationDetails>
                    <span>{range}</span>
                  </EducationDetails>
                  <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </StyledTabContent>
              );
            })}
        </StyledTabs>
      </Fade>
    </StyledContainer>
  );
};

Education.propTypes = {
  data: PropTypes.object,
};

export default Education;
