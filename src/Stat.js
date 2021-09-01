
import './App.css';
import React, { useState } from 'react'


function Stat() {
const [isvisible, setvisible] = useState(true)
const show =()=>{
  setvisible(!isvisible)
}
const tab=["partie1","partie2","partie3"];
  return (
    <div>
      <button onClick={show}>show</button>
      {isvisible?<ul>
        {tab.map((el)=>(<li>{el}</li>))}
      </ul>:<h1>hello</h1>}
      
    </div>
  )
}

export default Stat


