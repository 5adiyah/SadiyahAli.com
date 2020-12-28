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
            <h1>This is my about page!</h1>
            <StaticQuery
                query={aboutQuery}
                render={data => (
                    <div>
                        {data.allStrapiAbout.nodes.map(document => (
                            <>
                                <p>Id: {document.id}</p>
                                <h2>{document.title} - document.title</h2>
                                <div>{document.content}</div>
                            </>
                        ))}
                    </div>
                )}
            />
        </Layout>
   )
};




