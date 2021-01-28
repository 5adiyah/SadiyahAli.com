import React from 'react';
import Layout from "../components/layout";
import {graphql} from "gatsby";

export default function Blog() {
    return (
        <Layout>
            <p>Hey! I'm the blog page</p>
        </Layout>
    );
}

export const query = graphql`
    query PostQuery {
        blogposts: allSanityPost {
          nodes {
            id
            name
            date
            slug {
                current
            }
            category {
                id
                category
            }
            hero {
              asset {
                fluid(maxWidth: 400) {
                    ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
    }
`;