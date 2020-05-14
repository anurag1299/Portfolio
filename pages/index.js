import React from "react";
import PropTypes from "prop-types";
import { Layout } from "@components";
import styled from "styled-components";
import { Main } from "@styles";

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const Index = () => {
  <Layout>
    <StyledMainContainer className="fillHeight"></StyledMainContainer>
  </Layout>;
};

Index.PropTypes = {};

export default Index;
