import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";

const aboutQuery = graphql`  
  query AboutQuery {
    allStrapiAbout {
        nodes {
          id
          title
          content
        }
    }
  }
`;

export default function About() {
    return (
        <Layout>
            <StaticQuery
                query={aboutQuery}
                render={data => (
                    <>
                        {data.allStrapiAbout.nodes.map(document => (
                            <>
                                <h2>{document.title} - document.title</h2>
                                <p>{document.content}</p>
                            </>
                        ))}
                    </>
                )}
            />
        </Layout>
   )
};




