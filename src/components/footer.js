import React from 'react'
import styl from './footer.module.scss'

export default function Footer(props) {
    return (
        <footer className={styl.footer}>
            <p>Created by {props.author}, Copyright 2020</p>
        </footer>
    )
}