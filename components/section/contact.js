import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { email } from "../../config";
import styled from "styled-components";
import { theme, mixins, media, Section, Heading } from "../../styles/index";
import Fade from "react-reveal/Fade";
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

const Contact = (data) => {
  const frontmatter = data.frontmatter;
  //console.log(data);
  return (
    <StyledContainer id="contact">
      <Fade bottom>
        <StyledHeading>{"Loved my work?"}</StyledHeading>
        <StyledTitle>{frontmatter.title}</StyledTitle>
      </Fade>
      <Fade bottom>
        <div dangerouslySetInnerHTML={{ __html: frontmatter.contentHtml }} />
        <StyledEmailLink href={`mailto:${email}`}>
          {frontmatter.buttonText}
        </StyledEmailLink>
      </Fade>
    </StyledContainer>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
};

export default Contact;
