import React from "react";
import {graphql, Link} from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
export default function SinglePostPage({ data }) {
    const { post } = data;
    return (
        <Layout>
            <div className="post-wrapper grid yellow-before">
                <p className="post-date">{post.date}</p>
                <p className="post-title">{post.name}</p>
                <div className="post-img">
                    <Img fluid={post.hero.asset.fluid} alt={post.name}/>
                </div>
                <div className="horizontal-div yellow">
                </div>
            </div>
        </Layout>
    )
}

//This needs to be dynamic based on the slug pased in gatsby-node.js
export const query = graphql`
    query($slug: String!) {
        post: sanityPost(slug: {
            current: { eq: $slug }
        }) {
            id
            name
            date
            content {
                _rawChildren
                children
                list
                style
            }
            hero {
              asset {
                fluid(maxWidth: 720) {
                    ...GatsbySanityImageFluid
                }
              }
            }
        }
    }
`;