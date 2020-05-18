import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import { theme, mixins, media, Section, Heading } from "../../styles/index";
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
  max-width: 700px;
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

const Education = () => {
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

  return (
    <StyledContainer id="jobs">
      <Heading>Where I&apos;ve Learned</Heading>
      <StyledTabs>
        <StyledTabList
          role="tablist"
          aria-label="Education tabs"
          onKeyDown={(e) => onKeyPressed(e)}
        >
          <li>
            <StyledTabButton
              isActive={activeTabId === 0}
              onClick={() => setActiveTabId(0)}
              ref={(el) => (tabs.current[0] = el)}
              id={`tab-${0}`}
              role="tab"
              aria-selected={activeTabId === 0 ? true : false}
              aria-controls={`panel-${0}`}
              tabIndex={activeTabId === 0 ? "0" : "-1"}
            >
              <span>{"MPHS"}</span>
            </StyledTabButton>
          </li>
          <li>
            <StyledTabButton
              isActive={activeTabId === 1}
              onClick={() => setActiveTabId(1)}
              ref={(el) => (tabs.current[1] = el)}
              id={`tab-${1}`}
              role="tab"
              aria-selected={activeTabId === 1 ? true : false}
              aria-controls={`panel-${1}`}
              tabIndex={activeTabId === 1 ? "0" : "-1"}
            >
              <span>{"YMN"}</span>
            </StyledTabButton>
          </li>
          <li>
            <StyledTabButton
              isActive={activeTabId === 2}
              onClick={() => setActiveTabId(2)}
              ref={(el) => (tabs.current[2] = el)}
              id={`tab-${2}`}
              role="tab"
              aria-selected={activeTabId === 2 ? true : false}
              aria-controls={`panel-${2}`}
              tabIndex={activeTabId === 2 ? "0" : "-1"}
            >
              <span>{"SGGS"}</span>
            </StyledTabButton>
          </li>
          <StyledHighlight activeTabId={activeTabId}></StyledHighlight>
        </StyledTabList>
        <StyledTabContent
          isActive={activeTabId === 0}
          id={`panel-${0}`}
          role="tabpanel"
          aria-labelledby={`tab-${0}`}
          tabIndex={activeTabId === 0 ? "0" : "-1"}
          hidden={activeTabId !== 0}
        >
          <EducationTitle>
            <span>{"SSC"}</span>
            <EducationPlace>
              <span>&nbsp;@&nbsp;</span>
              <span>{"Mahatma Phule HighSchool, Nanded."}</span>
            </EducationPlace>
          </EducationTitle>
          <EducationDetails>
            <span>{"June 2005 - March 2015"}</span>
          </EducationDetails>
          <div>
            <ul>
              <li>{"Completed my education upto 10th standard at MPHS."}</li>
              <li>{"Passed SSC exam with 95% percentage."}</li>
            </ul>
          </div>
        </StyledTabContent>
        <StyledTabContent
          isActive={activeTabId === 1}
          id={`panel-${1}`}
          role="tabpanel"
          aria-labelledby={`tab-${1}`}
          tabIndex={activeTabId === 1 ? "0" : "-1"}
          hidden={activeTabId !== 1}
        >
          <EducationTitle>
            <span>{"HSC"}</span>
            <EducationPlace>
              <span>&nbsp;@&nbsp;</span>
              <span>{"Yeshwant Mahavidyalaya Nanded."}</span>
            </EducationPlace>
          </EducationTitle>
          <EducationDetails>
            <span>{"June 2015 - February 2017"}</span>
          </EducationDetails>
          <div>
            <ul>
              <li>{"Completed my higher secondary education at YMN."}</li>
              <li>{"Passed HSC exam with 88% percentage."}</li>
            </ul>
          </div>
        </StyledTabContent>
        <StyledTabContent
          isActive={activeTabId === 2}
          id={`panel-${2}`}
          role="tabpanel"
          aria-labelledby={`tab-${2}`}
          tabIndex={activeTabId === 2 ? "0" : "-1"}
          hidden={activeTabId !== 2}
        >
          <EducationTitle>
            <span>{"Engineering"}</span>
            <EducationPlace>
              <span>&nbsp;@&nbsp;</span>
              <span>
                {
                  "Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri."
                }
              </span>
            </EducationPlace>
          </EducationTitle>
          <EducationDetails>
            <span>{"June 2017 - Present"}</span>
          </EducationDetails>
          <div>
            <ul>
              <li>
                {
                  "I am currently studying Computer Science Engineering at sggs."
                }
              </li>
              <li>
                {
                  "Constantly learning and implementing new tech related topics."
                }
              </li>
            </ul>
          </div>
        </StyledTabContent>
      </StyledTabs>
    </StyledContainer>
  );
};

export default Education;
