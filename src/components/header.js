import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import hst from './header.module.scss'

function Header() {

    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)
    
    return (
        <header className={hst.header}>
            <h3>
                <Link to="/"  className={hst.title}>{data.site.siteMetadata.title}</Link>
            </h3>
            <nav>
                <ul className={hst.navList}>
                    <li>
                        <Link to="/" className={hst.navItem} activeClassName={hst.activeNav}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={hst.navItem} activeClassName={hst.activeNav}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" className={hst.navItem} activeClassName={hst.activeNav}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={hst.navItem} activeClassName={hst.activeNav}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default  Header