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
        allSanityPost {
          nodes {
            id
            name
            date
            content {
              _key
              _type
              style
              list
              _rawChildren
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