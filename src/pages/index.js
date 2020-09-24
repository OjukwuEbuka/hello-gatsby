import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h2>Hi!</h2>
      <p>The Great Gatsby Bootcamp.</p>
      <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
    </div>
  )
}
