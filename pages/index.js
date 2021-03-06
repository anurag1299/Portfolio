import React from "react";
import PropTypes from "prop-types";
import {
  Layout,
  Hero,
  About,
  Education,
  Featured,
  Contact,
} from "../components/index";
import styled from "styled-components";
import { Main, GlobalStyle } from "../styles/index";
import { getContentData, getContent } from "../lib/content";

const StyledMainContainer = styled(Main)`
  counter-reset: section;
`;

const Index = ({ data }) => {
  //console.log(data);
  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero frontmatter={data.top}></Hero>
        <About frontmatter={data.about}></About>
        <Education frontmatter={data.education}></Education>
        <Featured frontmatter={data.featured}></Featured>
        <Contact frontmatter={data.contact}></Contact>
      </StyledMainContainer>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const names = getContent();
  //console.log(names);
  const data = await Promise.all(
    names.map(async (name) => await getContentData(name))
  );

  var content = {};
  //console.log("here : " + data);
  // data.map((idata) => {
  //   //console.log("idata", idata);
  //   content.push({ [idata.id]: { ...idata } });
  // });

  for (var i = 0; i < data.length; i++) {
    if (content.hasOwnProperty(data[i].id)) {
      const tmp = {};
      tmp[data[i].subId] = data[i];
      content[data[i].id] = { ...content[data[i].id], ...tmp };
      continue;
    }
    if (data[i].hasOwnProperty("subId")) {
      const tmp = {};
      tmp[data[i].subId] = data[i];
      content[data[i].id] = { ...tmp };
      continue;
    }

    content[data[i].id] = data[i];
  }
  //console.log(content);

  return {
    props: { data: content },
  };
}
