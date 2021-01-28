import React from 'react';
import Layout from "../components/layout";
import {graphql} from "gatsby";
import BlogList from "../components/BlogList";

export default function Blog({ data }) {
    const posts = data.blogposts.nodes;
    return (
        <Layout>
            <BlogList posts={posts} />
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