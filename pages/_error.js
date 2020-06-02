import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { withRouter } from "next/router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import { Layout } from "../components/index";
import styled from "styled-components";
import { theme, mixins, media, Main } from "../styles/index";
const { colors, fonts, navDelay } = theme;

const StyledMainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: ${colors.blue};
  font-family: ${fonts.JetBrainsMono};
  font-size: 12vw;
  line-height: 1;
  ${media.bigDesktop`font-size: 200px;`}
  ${media.phablet`font-size: 120px;`};
`;
const StyledSubtitle = styled.h2`
  font-size: 3vw;
  font-weight: 400;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;
const StyledHomeButton = styled.a`
  ${mixins.bigButton};
  margin-top: 40px;
`;

function Error({ statusCode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fade">
            <StyledMainContainer className="fillHeight">
              <StyledTitle>404</StyledTitle>
              <StyledSubtitle>Page Not Found</StyledSubtitle>
              <Link href="/">
                <StyledHomeButton>Go Home</StyledHomeButton>
              </Link>
            </StyledMainContainer>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
