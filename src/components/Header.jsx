import React from 'react'
import "../css/header.css"
const Header = ({members}) => {
    return (
        <div className="header">
            <h1>headers</h1>
            <p>{members[0].username}</p>
        </div>
    )
}

export default Header
