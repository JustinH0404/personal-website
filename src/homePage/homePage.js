import './homePage.css'
import React from 'react'
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

export default function HomePages(){
    return(
    <section id = "homePage">
        <div class = "homePage">
            <p class = "homeName"> Justin Hong</p>
            <p class = "homeDesc"> Software Developer | EECS @ UC Berkeley</p>
            <div class = "socials">
            <a href = "https://www.facebook.com/JustinH0404/" target = "_blank"><img class = "socials" src = {fb} alt = "fb"/></a>
            <a href = "https://www.instagram.com/justinhong0404/" target = "_blank"><img class = "socials" src = {insta} alt = "Insta"/></a>
            <a href = "http://www.linkedin.com/in/justinhong4" target="_blank"> <img class = "socials" src = {linkedin} alt = "tw"/></a>
            <a href = "https://github.com/JustinH0404" target = "_blank"><img class = "socials" src = {github} alt = "something"/></a>
            </div>
        </div>
    </section>
    )
}