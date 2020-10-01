import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import styl from './blog.module.scss'

export default function Blog() {
    const posts = useStaticQuery(graphql`
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
            allContentfulBlogPost {
                edges {
                    node {
                        title
                        date: publishedDate (fromNow: true)
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <div>
                <h1>My Blog.</h1>
                <ul className={styl.posts}>
                    {posts.allMarkdownRemark.edges.map( ({node}) => (
                        <li className={styl.post}>
                            <Link to={`/blog/${node.fields.slug}`}>
                                <h2>
                                    {node.frontmatter.title}
                                </h2>
                                <p>{node.frontmatter.date}</p>
                            </Link>
                        </li>
                    ))}
                    {posts.allContentfulBlogPost.edges.map( ({node}) => (
                        <li className={styl.post}>
                            <Link to={`/blog/${node.slug}`}>
                                <h2>
                                    {node.title}
                                </h2>
                                <p>{node.date}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}