import React from 'react'
import {Link} from "gatsby"

export default function About() {
    return (
        <div>
            <h2>About.</h2>
            <p>Hi, I am Ebuka a brilliant fullstack developer.</p>
            <p>Wanna reach me? <Link to="/contact">Here.</Link></p>
        </div>
    )
}