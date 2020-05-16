import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Nav, Social, Email } from "./index";
import styled from "styled-components";
import { GlobalStyle, theme } from "../styles/index";
const { colors, fontSizes, fonts } = theme;

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  // const isHome = location.pathname === "/";

  return (
    <div id="root">
      <StyledContent>
        <Nav isHome={true}></Nav>
        <Social isHome={true}></Social>
        <Email isHome={true}></Email>
        <div id="content">{children}</div>
      </StyledContent>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
