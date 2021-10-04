import React from 'react'
import './experiencePage.css'

export default function Experience(props){
    const name = props.name
    const descrip = props.descrip
    const time = props.time
    const role = props.role
    return (
        <div class = "expBlock">
          <p class = "expTitle2">{name}</p>
          <p class = "expTime"> {time}</p>
          <p class = "expTime"> {role}</p>
          <p class = "expDesc">{descrip}</p>
        </div>
    )
}