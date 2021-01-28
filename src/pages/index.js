import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, StaticQuery} from "gatsby";
import ReactMarkdown from "react-markdown";

export default function IndexPage({ data }) {
    const intro = data.intros.nodes;
    console.clear();
    console.log(intro);
    return(
        <Layout>
            <SEO title="Home"/>
            <div className="intro grid yellow-before">
                {intro.map((homepg) => (
                    <div className="full-width" key={homepg.name}>
                        <h1>{homepg.pagetitle}</h1>
                        <p>{homepg.content}</p>
                    </div>
                ))}
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
    );
};

export const query = graphql`
    query IntroQuery {
      intros: allSanityIntro {
        nodes {
            pagetitle
            content
            name
        }
      }
    }
`;
