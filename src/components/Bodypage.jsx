import React, { useState } from 'react'
import Sidebar from './Sidebar'
import "../css/bodyPage.css"
import RightBodyPage from './RightBodyPage'
const Bodypage = () => {
    const [number,setNumber]=useState(1);
    return (
        <div className="bodyPage">
            <Sidebar onSetNumber={setNumber}/>
            <RightBodyPage number={number}/>
            
        </div>
    )
}

export default Bodypage
