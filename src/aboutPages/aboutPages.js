import './aboutPages.css'
import aboutMe from "./aboutMe.jpg"
import Signature from "./Signature.png"

export default function aboutPages(){
    return(
    <section id = "aboutPage">
      <div class = "aboutPage fade-in">
      <div className = "signBox">
        <img src = {Signature} className = "signPic" alt = "me"></img>
      </div>
      <div className = "aboutDescription">
        <img class = "aboutPhoto" src = {aboutMe} alt = "me"/> 
        <div class = "aboutText2">
          <p class = "aboutText">
          Hi, I'm Justin! I am currently a freshman studying Electrical Engineering 
          and Computer Science at UC Berkeley.
           </p>
           <p className = "aboutText">My ultimate goal is to one day help design and build 
           a product that will help the visually impaired regain their sight.</p>
           <p className = "aboutText">But since I'm not there yet, here are a few things I enjoy:</p>
           <p className = "aboutText">Old Taylor Swift songs - Back to December, You Belong with Me, are all immaculate</p>
           <p className = "aboutText">Attack on Titan (the Manga) - Analyzing protagonist Eren Yeager's choice making is fun</p>
          </div>
          </div> 
      </div>
    </section>
    )
}