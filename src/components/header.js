import React from 'react'
import { Link } from 'gatsby'
import hst from './header.module.scss'

function Header(props) {

    
    return (
        <header className={hst.header}>
            <h3>
                <Link to="/"  className={hst.title}>{props.title}</Link>
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