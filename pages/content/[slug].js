import React from "react";

export default function PostTemplate(props) {
  return <div>Here we'll load "{props.slug}"</div>;
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  return { slug };
};
