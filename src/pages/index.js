import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as Markdown from 'react-markdown'

const HomePage = () => (
  <StaticQuery
    query={graphql`
      query HomePage {
        contentfulHomePage {
          title
          date(formatString: "MMMM DD, YYYY")
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
        <div style={{ margin: `3rem auto`, maxWidth: 1024 }}>
          <h1>{title}</h1>
          <small>Created on {date}</small>
          <Markdown source={content} />
        </div>
      </>
    )}
  />
);

export default HomePage;
