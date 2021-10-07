import React, { useState } from 'react'
import "../css/sidebar.css"
const Sidebar = ({onSetNumber}) => {
    
    const [activeBtn,setActiveBtn]=useState({
        b1:true,
        b2:false,
        b3:false,
        b4:false,
        b5:false,
        b6:false,
        b7:false
    })
    return (
        <div className="sidebar">
    
            <button className={activeBtn.b1 && "active"} onClick={()=>{
                onSetNumber("b1")
                setActiveBtn(
                    {
        b1:true,
        b2:false,
        b3:false,
        b4:false,
        b5:false,
        b6:false,
        b7:false
    }
                )
            }}>b1</button>
            <button className={`"" ${activeBtn.b2 && "active"}`} onClick={()=>{
                console.log("b2")
                onSetNumber("b2")
                setActiveBtn(
                    {
        b1:false,
        b2:true,
        b3:false,
        b4:false,
        b5:false,
        b6:false,
        b7:false
    }
                )
            }}>b2</button>
            <button className={activeBtn.b3 && "active"}
            onClick={()=>{
                onSetNumber("b3")
                setActiveBtn(
                    {
        b1:false,
        b2:false,
        b3:true,
        b4:false,
        b5:false,
        b6:false,
        b7:false
    }
                )
            }}>b3</button>
            <button className={activeBtn.b4 && "active"}
            onClick={()=>{
                onSetNumber("b4")
                setActiveBtn(
                    {
        b1:false,
        b2:false,
        b3:false,
        b4:true,
        b5:false,
        b6:false,
        b7:false
    }
                )
            }}>b4</button>
            <button className={activeBtn.b5 && "active"}
            onClick={()=>{
                onSetNumber("b5")
                setActiveBtn(
                    {
        b1:false,
        b2:false,
        b3:false,
        b4:false,
        b5:true,
        b6:false,
        b7:false
    }
                )
            }}>b5</button>
            <button className={activeBtn.b6 && "active"} 
            onClick={()=>{
                onSetNumber("b6")
                setActiveBtn(
                    {
        b1:false,
        b2:false,
        b3:false,
        b4:false,
        b5:false,
        b6:true,
        b7:false
    }
                )
            }}>b6</button>
            <button className={activeBtn.b7 && "active"} 
            onClick={()=>{
                onSetNumber("b7")
                setActiveBtn(
                    {
        b1:false,
        b2:false,
        b3:false,
        b4:false,
        b5:false,
        b6:false,
        b7:true
    }
                )
            }}>b7</button>
        </div>
    )
}

export default Sidebar
