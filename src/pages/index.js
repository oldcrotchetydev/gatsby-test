import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulHomePage {
          title
          date
          content {
            content
          }
        }
      }
    `}
    render={({
      contentfulHomePage: {
        title,
        date,
        content: { content },
      }
    }) => (
      <>
        <h1>{title}</h1>
        <small>Created on {date}</small>
        <p>{content}</p>
      </>
    )}
  />
);

export default HomePage;
