import React from "react";
import PropTypes from "prop-types";
import { Layout } from "../components/index";
import styled from "styled-components";
import { Main } from "../styles/index";

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const Index = () => (
  <Layout>
    <StyledMainContainer className="fillHeight"></StyledMainContainer>
  </Layout>
);

export default Index;
