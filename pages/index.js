import React from "react";
import PropTypes from "prop-types";
import { Layout, Top, About, Education, Contact } from "../components/index";
import styled from "styled-components";
import { Main, GlobalStyle } from "../styles/index";

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const Index = () => (
  <Layout>
    <StyledMainContainer className="fillHeight">
      <Top></Top>
      <About></About>
      <Education></Education>
      <Contact></Contact>
    </StyledMainContainer>
  </Layout>
);

export default Index;
