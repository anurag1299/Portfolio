import React from "react";
import PropTypes from "prop-types";
import { socialMedia } from "../config";
import { Side } from "./index";
import { FormattedIcon } from "./icons";
import styled from "styled-components";
import { theme } from "../styles/index";
const { colors } = theme;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${colors.lightSlate};
  }

  li:last-of-type {
    margin-bottom: 20px;
  }
`;
const StyledLink = styled.a`
  padding: 10px;
  
  color:${colors.lightestSlate}

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <StyledLink
              href={url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={name}
            >
              <FormattedIcon name={name} />
            </StyledLink>
          </li>
        ))}
    </StyledList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
