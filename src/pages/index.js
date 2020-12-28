import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, StaticQuery} from "gatsby";
import ReactMarkdown from "react-markdown";

const indexQuery = graphql`  
  query IndexQuery {
    allStrapiHome {
      nodes {
        intro
        introtitle
        experiencetitle
        skillstitle
        experience {
          role
        }
      }
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticQuery
        query={indexQuery}
        render={data => (
            <>
                {data.allStrapiHome.nodes.map(document => (
                    <>
                       <h1>{document.introtitle}</h1>
                        <ReactMarkdown source={document.intro} />

                        <h2>{document.experiencetitle}</h2>
                        <h2>{document.skillstitle}</h2>
                    </>
                ))}
            </>
        )}

    />
  </Layout>
)

export default IndexPage
