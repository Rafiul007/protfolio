import React from 'react'
import './Home.css'
import hero from '../../Assests/me.jpg'
function Home() {
    return (
        <>
            <div className="home-section">
                {/* Navbar section */}
                <div className="navbar-container">
                    <ul>
                        <li>Works</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                {/* Hero section */}
                <div className="hero-container">
                    <div className="hero-left">
                        <h1>Hi, I am <span>Rafiul Faisal</span>,<br />Fullstack Developer</h1>
                        <p>A fullstack developer, who turning ideas into real life product.<br />Looking for fulltime opportunity.</p>
                        <button>Download Resume</button>
                    </div>
                    <div className="hero-right">
                        <div className="hero-img-container">
                            <img src={hero} alt="Rafiul Faisal" />
                        </div>
                    </div>
                </div>
                {/* Services Section */}
                <div className="services-container">
                    <div className="services-sub-container">
                        <div className="service-heading">
                            <h1>What I Do?</h1>
                        </div>
                        <div className="service-cards">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home