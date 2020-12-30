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
                        <div className="intro grid yellow-before">
                                <h2 className="yellow-line">{document.introtitle}</h2>
                                <ReactMarkdown source={document.intro} />
                        </div>

                        <h2>{document.experiencetitle}</h2>
                        <h2>{document.experience.role}</h2>
                        <h2>{document.skillstitle}</h2>


                    </>
                ))}
            </>
        )}

    />
  </Layout>
)

export default IndexPage
