import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import lst from "./layout.module.scss"
import { Helmet } from 'react-helmet'

export default function Layout(props) {
    const {site} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author,
                    title
                }
            }
        }
    `)

    return (
        <div className={lst.container}>
            <Helmet title={`${props.title} | Blogaria`} />
            <div className={lst.content}>
                <Header title={site.siteMetadata.title} />
                {props.children}
            </div>
            <Footer author={site.siteMetadata.author} />
        </div>
    )
}