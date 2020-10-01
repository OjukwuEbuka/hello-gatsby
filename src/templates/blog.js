import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

export const query = graphql`
    query(
        $slug: String
    ) {
        markdownRemark (
            fields: {
                slug: {
                    eq: $slug
                }
            }
        ){
            frontmatter {
                title
                date
            }
            html
        }

        contentfulBlogPost (
            slug: {
                eq: $slug
            }
        ) {
            title
            date: publishedDate(fromNow: true)
            body {
                json
            }
        }
    }
`
const markD = ({data: {markdownRemark: {frontmatter: {title, date}, html}}}) => {
    return (
        [<>
            <h1>{title}</h1>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{__html: html}}></div>
        </>, title]
    )
}

const contful = ({data:{contentfulBlogPost: {title, date, body}}}) => {
    const options = {
        renderNode: {
            "embedded-asset-block": node => {
                const alt = node.data.target.fields.title['en-Us']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url} />
            }
        }
    }
    return (
        [<>
            <h1>{title}</h1>
            <p>{date}</p>
            { documentToReactComponents(body.json, options) }
        </>, title]
    )
}

const Blog = (props) => {
    const [body, title] = props.data.markdownRemark ?
        markD(props) :
        contful(props)

    return (
        <Layout title={title}>
            { body }
        </Layout>
    )
}

export default Blog