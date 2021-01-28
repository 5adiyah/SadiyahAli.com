import path from 'path';

async function createPostPgs({ graphql, actions }) {
    // 1. Get a template for this page
    const postTemplate = path.resolve('./src/templates/Post.js');

    // 2. Query all posts
    const { data } = await graphql(`
        query {
            posts: allSanityPost {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    // 3. Loop over each post and create a page for each one
    data.posts.nodes.forEach(post => {
        actions.createPage({
            path: `blog/${post.slug.current}`,
            component: postTemplate,
            context: {
                slug: post.slug.current,
            }
        });
    });
}

export async function createPages(params) {
    // Create Pages dynamically for blog posts
    await createPostPgs(params);
}