import './homePage.css'
import React from 'react'
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import Title from './title.js'
import { Link } from 'react-router-dom';


export default function HomePages(){

    return(
    <section id = "homePage">
        <div class = "homePage"> 
            <p class = "homeName">Hi</p>
{/*         
            <Title>
            </Title>  */}
            {/* <div class = "fadein"> */}
            <div class = "homeDesc">
                <div> I'm Justin,</div>
                <div> a student at UC Berkeley studying </div>
                <div> Electrical Engineering and </div>
                <div>Computer Science</div>
            </div>
            <div class = "homeDesc2">
                <a href = "#projectsPage" class = "links2"> Projects </a>
                <Link className = "paddingLeftRight links" to = "/aboutMe">About me</Link>
            </div>
            <div>
                <h2 class = "rotatingWords">
                    <span>Currently: </span>
                    <div class="rw-words rw-words-1">
                        <span>Creating and devleoping at Codebase</span>
                        <span>Studying at Moffit Library</span>
                        <span>Working out at RSF</span>
                        <span>Playing volleyball with friends</span>
                        {/* <span></span>
                        <span>beautiful butterflies</span> */}
                    </div>
                    <br />
                </h2>
            </div>
                        
            <div class = "socials">
            {/* <a href = "https://www.facebook.com/JustinH0404/" target = "_blank"><img class = "socials" src = {fb} alt = "fb"/></a>
            <a href = "https://www.instagram.com/justinhong0404/" target = "_blank"><img class = "socials" src = {insta} alt = "Insta"/></a>
            <a href = "http://www.linkedin.com/in/justinhong4" target="_blank"> <img class = "socials" src = {linkedin} alt = "tw"/></a>
            <a href = "https://github.com/JustinH0404" target = "_blank"><img class = "socials" src = {github} alt = "something"/></a> */}
            </div>
            {/* </div> */}
        </div>
    </section>
    )
}