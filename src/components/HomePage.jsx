import React from 'react'
import Header from './Header'
import "../css/home.Page.css"
import Bodypage from './Bodypage'
const HomePage = ({members}) => {
    return (
        <div className="homePage">
            <Header members={members}/>
            <Bodypage />
        </div>
    )
}

export default HomePage
