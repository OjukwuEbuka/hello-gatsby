import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import lst from "./layout.module.scss"

export default function Layout(props) {
    return (
        <div className={lst.container}>
            <div className={lst.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}