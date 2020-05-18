import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { email } from "../../config";
import styled from "styled-components";
import { theme, mixins, media, Section, Heading } from "../../styles/index";
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const StyledHeading = styled(Heading)`
  display: block;
  color: ${colors.blue};
  font-size: ${fontSizes.md};
  font-family: ${fonts.JetBrainsMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.sm};
    ${media.desktop`font-size: ${fontSizes.smish};`};
  }
  &:after {
    display: none;
  }
`;
const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Contact = () => {
  return (
    <StyledContainer id="contact">
      <StyledHeading>{"Loved my work?"}</StyledHeading>
      <StyledTitle>{"Get In Touch"}</StyledTitle>
      <div>
        <p>
          {
            "I am currently looking forward for any new opportunities. My inbox is always open,Whether you have a question or an awesome idea just ping me.I'll try my best to get back to you!"
          }
        </p>
      </div>
      <StyledEmailLink href={`mailto:${email}`}>Say Hello</StyledEmailLink>
    </StyledContainer>
  );
};

export default Contact;
