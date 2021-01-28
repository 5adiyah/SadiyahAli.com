import React from 'react';
import { Link } from 'gatsby';
function BlogItem({ post }) {
    return (
        <div className="blog-item">
            <Link to={`/blog/${post.slug.current}`}>
                <p className="post-date">{post.date}</p>
                <p className="post-title">{post.name}</p>
                <p className="post-teaser">{post.teaser}</p>
            </Link>
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