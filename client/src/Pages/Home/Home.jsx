import React from 'react'
import './Home.css'
import hero from '../../Assests/me.jpg'
import ServiceCard from '../../Components/Cards/ServiceCard'
import WebIcon from '@mui/icons-material/Web';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
function Home() {
    const data = [
        {
            title: "Web Development",
            skill1: "ReactJS",
            skill2: "HTML/CSS",
            icon: <WebIcon fontSize="inherit" />,
        },
        {
            title: "Software Development",
            skill1: "ReactJS",
            skill2: "NodeJS",
            icon: <WebhookOutlinedIcon fontSize="inherit" />,
        },
        {
            title: "App Development",
            skill1: "Android",
            skill2: "React native",
            icon: <PhoneAndroidOutlinedIcon fontSize="inherit" />,
        }
    ];
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
                            {
                                data.map((item, index) => {
                                    return (
                                        <ServiceCard key={index}  icon={item.icon} title={item.title} skil1={item.skill1} skill2={item.skill2} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home