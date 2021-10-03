import React from 'react'
import './Project.css'

export default function Project(props){
    const name = props.name
    const image = props.image
    const descrip = props.descrip
    return (
        <div class = "projectDescription">
            <p class = "projectsTitle"> {name} </p>
            <img class = "projectsPic" src = {image} alt = "pic"></img>
            <p class = "projectsText">{descrip}</p>
        </div>
    )
}