import React from 'react';

export default function BlogList( { posts } ) {
    return (
        <p>List of Posts: {posts.length}</p>
    );
}