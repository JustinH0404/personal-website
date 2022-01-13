import './aboutPages.css'
import aboutMe from "./aboutMe.JPG"
import Signature from "./Signature.png"
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"

export default function aboutPages(){
    return(
    <section id = "aboutPage">
      <div class = "aboutPage fade-in">
      <div className = "signBox">
        <img src = {Signature} className = "signPic" alt = "me"></img>
      </div>
      <div class = "profile verticalAlign">
            <div class = "socialsBox">
              <a href = "https://www.facebook.com/JustinH0404/" target = "_blank"><img class = "socials" src = {fb} alt = "fb"/></a>
              <a href = "https://www.instagram.com/justinhong0404/" target = "_blank"><img class = "socials" src = {insta} alt = "Insta"/></a>
              <a href = "http://www.linkedin.com/in/justinhong4" target="_blank"> <img class = "socials" src = {linkedin} alt = "tw"/></a>
              <a href = "https://github.com/JustinH0404" target = "_blank"><img class = "socials" src = {github} alt = "something"/></a>
            </div>
            <div class = "aboutPicBox">
              <img class = "aboutPhoto" src = {aboutMe} alt = "me"/>
            </div>
              <div class = "aboutText2">
                <span> Hi, I'm Justin! </span>
                <div class = "aboutText">
                  <span> I'm currently pursuing an Electrical Enginerering and Computer Science Degree at UC Berkeley. I first became interested in pursuing technology after learning that my sister's genetic visual impairement
                  disease could be solved through software development.</span> 
                  <p class = "noMargin">Some of my hobbies include: </p>
                  {/* <p>Listening to early 2010s music</p>  */}
                  <ul>
                    <li>Listening to music (Current Favorite Song: Billie Jean by Michael Jackson)</li>
                    <li>Netflix! (Currently Watching: You Season 2)</li>
                    <li>Playing Volleyball with Friends</li>
                    <li>Playing Table Tennis Competitively</li>
                  </ul>
                  <p>If you're interested in working with me, please don't hesitate to reach out with the icons on the left, or email me at 
                  justin.hong0404@gmail.com!</p>
              </div>
            </div>
           </div>
      </div>
    </section>
    )
}