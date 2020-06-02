import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Nav, Social, Email, Footer } from "./index";
import styled from "styled-components";
import { GlobalStyle, theme } from "../styles/index";
const { colors, fontSizes, fonts } = theme;
import { withRouter } from "next/router";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, pathname }) => {
  // const isHome = location.pathname === "/";
  console.log(pathname);
  // useEffect(() => {
  //   if (location.hash) {
  //     const id = location.hash.substring(1); // location.hash without the '#'
  //     setTimeout(() => {
  //       const el = document.getElementById(id);
  //       if (el) {
  //         el.scrollIntoView();
  //         el.focus();
  //       }
  //     }, 0);
  //   }
  // });

  return (
    <div id="root">
      <StyledContent>
        <Nav isHome={true}></Nav>
        <Social isHome={true}></Social>
        <Email isHome={true}></Email>
        <div id="content">
          {children}
          <Footer />
        </div>
      </StyledContent>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string,
};

Layout.getInitialProps = (ctx) => {
  return ctx.pathname;
};

export default Layout;
