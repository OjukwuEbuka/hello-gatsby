import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

export default function Blog() {
    const posts = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <div>
                <h1>My Blog.</h1>
                <ul>
                    {posts.allMarkdownRemark.edges.map( ({node}) => (
                        <li>
                            <h2>
                                <Link to={`/blog/${node.fields.slug}`}>{node.frontmatter.title}</Link>
                            </h2>
                            <p>{node.frontmatter.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}