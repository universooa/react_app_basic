import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <Link to="/">
            <h1>Return Home.</h1>
        </Link>
    )
}

export default Header
