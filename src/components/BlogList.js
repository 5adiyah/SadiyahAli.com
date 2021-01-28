import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

function BlogItem({ post }) {
    return (
        <div className="blog-item">
                <p className="post-date">{post.date}</p>
                <Link to={`/blog/${post.slug.current}`}>
                    <p className="post-title">{post.name}</p>
                </Link>
                <p className="post-teaser">{post.teaser}</p>
        </div>
    )
}

export default function BlogList( { posts } ) {
    return (
        <div className="blog-list-wrapper">
            {posts.map((post) => (
                <BlogItem key={post.id} post={post} />
            ))}
        </div>

    );
}