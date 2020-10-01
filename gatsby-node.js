const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

module.exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if(node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath) {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        // const slug = createFilePath({node, getNode, basePath: `pages`})

        createNodeField({
            node,
            name: 'slug',
            value: slug
        });
        // const fileNode = getNode(node.parent)
        // console.log(`\n`, fileNode.relativePath)
    }
};

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMarkdownRemark (
                filter: {
                    frontmatter: {
                        title: {
                            ne: ""
                        }
                    }
                }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${node.fields.slug}`,
            context: {
                slug: node.fields.slug
            }
        })
    })
}