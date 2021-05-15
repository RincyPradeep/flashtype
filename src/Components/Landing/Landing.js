import React from 'react'
import './Landing.css'
import hero from "../../assets/hero.png"
import Typewriter from 'typewriter-effect';

function Landing() {
    return (
        <div className="Landing-container">
            <div data-aos="fade-right" className="Landing-left">
                <h1 className="Landing-header">Can you type...</h1>
                <div className="typewriter-container">
                <Typewriter
                    options={{
                        strings: ['Fast?', 'Correct?','Quick?'],
                        autoStart: true,
                        loop: true,
                    }}
                 />
                </div>
            </div>
            <div data-aos="fade-left" className="Landing-right">
                <img src={hero} alt="hero" />
            </div>
            
        </div>
    )
}

export default Landing
