import React, { useState } from 'react';
import "./Projects.scss";
import Project from "../Project/Project";

import react from "../../assets/Images/tech-stacks/react.png"
import node from "../../assets/Images/tech-stacks/nodejs.png"
import passport from "../../assets/Images/tech-stacks/passport.png"
import redux from "../../assets/Images/tech-stacks/redux.png"
import stripe from "../../assets/Images/tech-stacks/stripe.png"
import mongo from "../../assets/Images/tech-stacks/mongo.png"
import framerMotion from "../../assets/Images/tech-stacks/framer-motion.png"

export default function Projects(props) {
    const initialState = {
        projects : [
            {
                name : "Youtube",
                id: "youtube",
                description: "This is Youtube Scraper, used React, redux & Context API",
                image: "https://amo2019.github.io/media-sample-files/portfolio/1*qZqEAQQHUi6FSGT3u_W8Qw.png",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React, redux & context API",
                techStackImages: [react, redux, mongo, passport, stripe, node],
                github: "https://github.com/amo2019/youtube-scraper",
                url: "https://youtube-scraper.netlify.app"
            },
            {
                name: "Events",
                id: "events",
                description: "This is social web app to add events and chatting, used React, Context API and FireBase",
                image: "https://amo2019.github.io/media-sample-files/portfolio/1*qZqEAQQHUi6FSGT3u_W8Qw.png",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React, redux & context API",
                techStackImages: [react, redux],
                github: "https://github.com/amo2019/social-webapp",
                url: "https://events-webapp.herokuapp.com/"
            },
            {
                name: "Dice",
                id: "dice",
                description: "This Is Dice Roll Game, used React, Context API.",
                image: "https://amo2019.github.io/media-sample-files/portfolio/1*qZqEAQQHUi6FSGT3u_W8Qw.png",
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
                description: "This is an app to contact Employees to inform them about their Shifts!, used React, redux, mongodb & NodeJS.",
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
                description: "This is web app to collect feedback from end users! used React, redux and FireBase.",
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
                description: "This is cloths shopping web app, used React, Sagas and FireBase",
                image: "https://amo2019.github.io/media-sample-files/portfolio/mern-firebase.jpeg",
                reason: "to gain more skills and discover new fearures in the domain.",
                techStack: "I used React and NodeJS",
                techStackImages: [react],
                github: "https://github.com/amo2019/ecommerce-app",
                url: "https://react-saga-shopping-app.herokuapp.com"
            }
        ]
    }

    


 const [state] = useState(initialState)

   const  displayProjects = () => {
        return state.projects.map(project => {
            return (
                <Project 
                    key= {project.id}
                    name = {project.name} 
                    description={project.description} 
                    image={project.image} 
                    reason={project.reason} 
                    techStack={project.techStack} 
                    techStackImages={project.techStackImages} 
                    github={project.github}
                    url={project.url}
                    id={project.id}
                />
            )
        })
    }

        return (
            <div className="Projects" id="projects">
                <div className="Projects__container">
                    <h3 className="Projects__heading">
                        Projects
                    </h3>
                    <div className="Projects__projects-container">
                        {displayProjects()}
                    </div>
                </div>
            </div>
        )
    }
