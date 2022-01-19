import React from 'react';
import './TestPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function TestPage(){
    AOS.init({
        duration:1200
    });
    return(
        <div class = "TestPage">
            <div class = "homePage"> 
            <div class = "container">
            <div class = "row">
                    <p class = "homeNameNew2">Hi</p>
            </div>
                <div class = "row">
                    <div class = "col-md-8" data-aos = "fade-right">
                        <div class = "homeDescNew col-12" >
                            <div class = "col-md-8">
                                <div>I'm Justin, a student</div>
                                <div>studying Eletrical Engineering and Computer Science at UC Berkeley</div>
                            </div>
                        </div>
                        <div class = "homeDesc2New w-100 row" >
                            <div class = "col-sm-2 overflowHid">
                                    <Link className = "links2" to = "/Projects">Projects</Link>
                            </div>
                            <div class = "col-sm-10 overflowHid">
                                <Link className = " links" to = "/aboutMe">About me</Link>
                            </div>
                            <div class = "row">
                                <h2 class = "rotatingWordsNew">
                                    <span>Currently: </span>
                                    <div class="rw-words rw-words-1">
                                        <span>Creating and devleoping at Codebase</span>
                                        <span>Studying at Moffit Library</span>
                                        <span>Working out at RSF</span>
                                        <span>Playing volleyball with friends</span>
                                    </div>
                                    <br />
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class = "col-4" data-aos = "fade-left">
                        <p class = "homeNameNew">Hi</p>
                    </div>
                </div>
            </div>

                
            {/* <div class = "homeDesc2New">
                <a href = "#projectsPage" class = "links2"> Projects </a>
                <Link className = "paddingLeftRight links" to = "/aboutMe">About me</Link>
            </div> */}

                        
            
            {/* </div> */}
        </div>
        </div>
    )
}