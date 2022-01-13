import React from 'react'
import './Project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project(props){
    const name = props.name
    const image = props.image
    const descrip = props.descrip
    return (
        <div class = "projectDescription" data-aos = "zoom-in">
            <div class = "projectsContainer">
            <div class = "projectTextBox">
                <p class = "projectsTitle"> {name} </p>
                <p class = "projectsText">{descrip}</p>
            </div>
            <div class = "projectsPicBox">
                <img class = "projectsPic" src = {image} alt = "pic"></img>
            </div>
            </div>
        </div>
    )
}