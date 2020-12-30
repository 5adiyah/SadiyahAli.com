import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, StaticQuery} from "gatsby";
import ReactMarkdown from "react-markdown";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
          <div className="intro grid yellow-before">
              <div className="full-width">
                  <h2 className="yellow-line">introo title</h2>
                  {/*<ReactMarkdown source={document.intro} />*/}
              </div>
          </div>

          <div className="experience grid">
              <div className="full-width">
                  <h2 className="yellow-line"> experience title </h2>
              </div>
          </div>

          <div className="skills grid">
              <div className="full-width">
                  <h2 className="yellow-line"> skills title</h2>
              </div>
          </div>
  </Layout>
)

export default IndexPage
