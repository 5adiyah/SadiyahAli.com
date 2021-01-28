import React from 'react';

function BlogItem({ post }) {
    return (
        <div className="blog-item">
            <p>{post.name}</p>
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