import React from "react";
import {graphql} from "gatsby";
import Img from "gatsby-image";
export default function SinglePostPage({ data }) {
    const { post } = data;
    return (
        <div className="post-wrapper">
            <div className="post-img">
                <Img fluid={post.hero.asset.fluid} alt={post.name}/>
            </div>
        </div>
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
            category {
                id
                category
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