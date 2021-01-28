import React from 'react';
import Layout from "../components/layout";
import {graphql} from "gatsby";
import BlogList from "../components/BlogList";

export default function Blog({ data }) {
    const posts = data.blogposts.nodes;
    return (
        <Layout>
            <div className="blog grid yellow-before">
                <div className="full-width">
                    <h2 className="yellow-line">The Blog</h2>
                </div>

                <div className="posts">
                    <BlogList posts={posts} />
                </div>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query PostQuery {
        blogposts: allSanityPost {
          nodes {
            id
            name
            date(formatString: "MMM DD, Y")
            teaser
            slug {
                current
            }
            category {
                id
                category
            }
          }
        }
    }
`;