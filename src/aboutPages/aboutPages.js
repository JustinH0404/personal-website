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
      <div className = "aboutDescription">
        <div class = "aboutPicBox">
          <img class = "aboutPhoto" src = {aboutMe} alt = "me"/> 
        </div>
        <div class = "aboutText2">
          <p class = "aboutText">
          Hi, I'm Justin! I am currently a freshman studying Electrical Engineering 
          and Computer Science at UC Berkeley.
           </p>
           <p className = "aboutText">One day in the future, I hope to develop somthing that 
           help improve people's life, such as creating something to help my visually impaired sister see well. 
           But right now, I'm just trying to learn as much as I can and enjoy life while I'm at it.</p>
           <p className = "aboutText">A few of my hobbies are playing volleyball, table tennis, hiking, watching shows 
           (anime!) and listening to music (old Taylor Swift is so good!). If you're interested in reaching out, my socials
           are attached below.</p>
          <div class = "socials">
            <a href = "https://www.facebook.com/JustinH0404/" target = "_blank"><img class = "socials" src = {fb} alt = "fb"/></a>
            <a href = "https://www.instagram.com/justinhong0404/" target = "_blank"><img class = "socials" src = {insta} alt = "Insta"/></a>
            <a href = "http://www.linkedin.com/in/justinhong4" target="_blank"> <img class = "socials" src = {linkedin} alt = "tw"/></a>
            <a href = "https://github.com/JustinH0404" target = "_blank"><img class = "socials" src = {github} alt = "something"/></a>
            </div>
          </div> 
          </div>
      </div>
    </section>
    )
}