import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout title="Home">
      <div>
        <h2>Hi!</h2>
        <p>The Great Gatsby Bootcamp.</p>
        <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
      </div>
    </Layout>
  )
}
