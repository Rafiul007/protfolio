import React, { useEffect, useState, useRef } from 'react'
import './Home.css'
import hero from '../../Assests/me.jpg'
import ServiceCard from '../../Components/Cards/ServiceCard'
import WebIcon from '@mui/icons-material/Web';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import Progressbar from '../../Components/Progressbar/Progressbar'
import {Typewriter } from "react-simple-typewriter"
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
    const skill = [
        {
            name: "HTML",
            percentage: 90,
        },
        {
            name: "CSS",
            percentage: 70,
        },
        {
            name: "Javascript",
            percentage: 75,
        },
        {
            name: "ReactJS",
            percentage: 86,
        },
        {
            name: "NodeJS",
            percentage: 76,
        },
        {
            name: "ExpressJS",
            percentage: 82,
        },
        {
            name: "PHP",
            percentage: 62,
        }
    ]
    
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
                        <h1>Hi, I am <span>Rafiul Faisal</span>,<br /><span>{<Typewriter words={['Fullstack Developer', 'Backend Developer', 'React JS Developer']} loop={100}  />}</span></h1>
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
                                        <ServiceCard key={index} icon={item.icon} title={item.title} skil1={item.skill1} skill2={item.skill2} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* Skill Section */}
                <div className="skills-container">
                    <h1>My Skills</h1>
                    <div className="skills">
                        {
                            skill.map((item, index) => {
                                return (
                                    <Progressbar key={index} skill={item.name} percentage={item.percentage} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home