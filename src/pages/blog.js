import React from 'react';
import Layout from "../components/layout";
import {graphql} from "gatsby";

export default function Blog({ data }) {
    const posts = data.blogposts.nodes;
    console.log(data);
    return (
        <Layout>
            <p>Hey! I'm the blog page</p>
            <p>There are {posts.length} Posts</p>
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