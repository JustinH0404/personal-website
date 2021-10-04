import './aboutPages.css'
import aboutMe from "../assets/aboutMe.jpg"

export default function aboutPages(){
    return(
    <section id = "aboutPage">
      <div class = "aboutPage">
        <p class="titleText"> About me</p>
        <img class = "aboutPhoto" src = {aboutMe} alt = "me"/> 
        <div class = "aboutText2">
          <p class = "aboutText">
          Hi, I'm Justin! I am currently a freshman studying Electrical Engineering 
          and Computer Science at UC Berkeley.
           </p>
          </div>
          <div class = "aboutText2">
            <p class = "aboutText">
              A few things I enjoy doing in my free time is playing volleyball and basketball with 
              a few friends. 
            </p>
          </div>
      </div>
    </section>
    )
}