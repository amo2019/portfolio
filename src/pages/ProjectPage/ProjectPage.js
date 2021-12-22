import React, { useEffect, useState } from 'react'
import "./ProjectPage.scss"
import Nav from "../../components/Nav/Nav"
import {HashLink as Link} from "react-router-hash-link"

import react from "../../assets/Images/tech-stacks/react.png"
import node from "../../assets/Images/tech-stacks/nodejs.png"
import passport from "../../assets/Images/tech-stacks/passport.png"
import redux from "../../assets/Images/tech-stacks/redux.png"
import stripe from "../../assets/Images/tech-stacks/stripe.png"
import mongo from "../../assets/Images/tech-stacks/mongo.png"
import framerMotion from "../../assets/Images/tech-stacks/framer-motion.png"


const ProjectPage = ({match, projects}) => {
  const initialState  = {
        projects : [
            {
                name : "Youtube",
                id: "youtube",
                description: "This is Youtube Scraper Web App.",
                image: "https://amo2019.github.io/media-sample-files/portfolio/Getting-started-with-Reactjs.png",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React, redux & context API",
                techStackImages: [react, redux, mongo, passport, stripe, node],
                github: "https://github.com/amo2019/youtube-scraper",
                url: "https://youtube-scraper.netlify.app"
            },
            {
                name: "Events",
                id: "events",
                description: "This is social web app to add events and chatting.",
                image: "https://amo2019.github.io/media-sample-files/portfolio/Getting-started-with-Reactjs.png",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React, redux & context API",
                techStackImages: [react, redux],
                github: "https://events-webapp.herokuapp.com/",
                url: "https://github.com/amo2019/social-webapp"
            },
            {
                name: "Dice",
                id: "dice",
                description: "This Is Dice Roll Web App Game.",
                image: "https://amo2019.github.io/media-sample-files/portfolio/Getting-started-with-Reactjs.png",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React, redux & context API",
                techStackImages: [react],
                github: "https://github.com/amo2019/roll-the-dice",
                url: "https://dice-rolling.netlify.app"
            },
            {
                name: "Pizza Store",
                id:"pizza-store",
                description: "This is Pizza store app (NodeJS-Vanella Javascript no third party libraries (task).",
                image: "https://amo2019.github.io/media-sample-files/portfolio/nodejs-icon-2.png",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used Vanilla JavaScript",
                techStackImages: [react],
                github: "https://github.com/amo2019/pizza-store-nodejs",
                url: "https://pizza-store-web-app.herokuapp.com"
            },
            {
                name : "Shopping App",
                id: "shopping-app",
                description: "This is a shopping App written in pure JavaScript.",
                image: "https://amo2019.github.io/media-sample-files/portfolio/javascript3.svg",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React and NodeJS",
                techStackImages: [react],
                github: "https://github.com/amo2019/vanilla-js-shopping-app",
                url: "https://amo2019.github.io/vanilla-js-shopping-app/"
            },
            {
                name: "Employees Shifts",
                id: "employees-shifts",
                description: "This is an app to contact Employees to inform them about their Shifts!.",
                image: "https://amo2019.github.io/media-sample-files/portfolio/mern-firebase.jpeg",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React and NodeJS",
                techStackImages: [react, redux, mongo, passport, node],
                github: "https://github.com/amo2019/employees-shift",
                url: "https://employees-shift.herokuapp.com"
            },
            {
                name: "Feedback",
                id: "feedback",
                description: "This is web app to collect feedback from end users!.",
                image: "https://amo2019.github.io/media-sample-files/portfolio/mern.jpeg",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React and NodeJS",
                techStackImages: [react, framerMotion],
                github: "https://github.com/amo2019/surveying-app",
                url: "https://react-redux-survey-app.herokuapp.com"
            },
            {
                name: "Ecommerce App",
                id:"ecommerce-app",
                description: "This is cloths shopping web app.",
                image: "https://amo2019.github.io/media-sample-files/portfolio/mern-firebase.jpeg",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React and NodeJS",
                techStackImages: [react],
                github: "https://github.com/amo2019/ecommerce-app",
                url: "https://react-saga-shopping-app.herokuapp.com"
            }
        ],
        currentProject : {}
    }
    const [state, setState] = useState(initialState)
    
    useEffect(() => {
        const id = match.params.id
        projects.map(project => {
            if(project.id === id){
                setState({
                    currentProject: project
                })
            }
            return project;
        })
        return () => {
            setState({
                currentProject: ""
            })
        }
    }, [match.params.id, projects])

  const  displayImage = () => {
        return state.currentProject.imgs.map(img => {
            return <img src={img} alt="" className="ProjectPage__img"/>
        })
    }

        const {name, description, reason, techStack, imgs, status} = state.currentProject
        console.log("imgs:",imgs)
        return (
            <div className="ProjectPage" id="project">
                <Nav />
                <div className="ProjectPage__container">
                    <h2 className="ProjectPage__heading">
                        {name}
                    </h2>
                    <p className="ProjectPage__description">
                        {description}
                    </p>
                    <h3 className="ProjectPage__sub-header">
                         Reason Behind It
                    </h3>
                    <p className="ProjectPage__description">
                        {reason}
                    </p>
                    <h3 className="ProjectPage__sub-header">
                        Technology Stacks
                    </h3>
                    <p className="ProjectPage__description">
                        {techStack}
                    </p>
                    <div className="ProjectPage__img-container">
                        {imgs && displayImage()}
                    </div>
                    <h3 className="ProjectPage__sub-header">
                        Status

                    </h3>
                    <p className="ProjectPage__description">
                        {status}
                    </p>
                    
                </div>
                <Link className="SkillsDescription__go-back" to="/#projects">
                    Go Back
                </Link>
            </div>
        )
    }


export default ProjectPage


