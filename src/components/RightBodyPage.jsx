import React from 'react'
import "../css/rightbodypage.css"
const RightBodyPage = ({number}) => {
    const arr=Array(number).fill();
    console.log(arr)
    return (
        <div className="btns">
        {arr.map((val,index)=>{

           return <button className="btn" key={index}>bb1</button>})}
        </div>
    )
}

export default RightBodyPage
