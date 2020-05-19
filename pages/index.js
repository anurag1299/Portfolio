import React from "react";
import PropTypes from "prop-types";
import { Layout, Top, About, Education, Contact } from "../components/index";
import styled from "styled-components";
import { Main, GlobalStyle } from "../styles/index";
import { getContentData, getContent } from "../lib/content";

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const Index = ({ allContentId }) => {
  console.log(allContentId);
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Top></Top>
        <About></About>
        <Education></Education>
        <Contact></Contact>
      </StyledMainContainer>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  Promise.resolve(getContent())
    .then(
      data=>Promise.resolve(data)
      .then(data=>console.log("idata",data))
      .catch(err=>console.log("ierr",err))
      )
    .catch(err=>console.log("ierr",err))
  // const allContentData = await allContentId.map((i) => {
  //   getContent(i.id);
  // });
  return {
    props: {
      
    },
  };
}
