import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Head, Loader, Nav, Social, Email, Footer } from "@components";
import styled from "styled-components";
import { GlobalStyle, theme } from "@styles";
const { colors, fontSizes, fonts } = theme;

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <div id="root">
      <StyledContent>
        <Nav />
        <Social />
        <Email />
        <div id="content">
          <Footer />
        </div>
      </StyledContent>
    </div>
  );
};

export default Layout;
