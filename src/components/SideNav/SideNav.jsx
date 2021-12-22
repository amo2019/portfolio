import React, { useState } from 'react';
import "./SideNav.scss";
import {motion} from "framer-motion"
import closeBtn from "../../assets/Images/close-btn.svg"
import {Link} from "react-router-dom"

const variants = {
    open: { x: 0},
    closed: { x: "110%", transition: {delay: 0.5}}
}

const liVariants = {
    open: { y: 0, opacity: 1},
    closed: { y: -20, opacity: 0}  
}

const ulVariants = {
    open: { 
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
                when: "afterChildren"
            }
          },
    closed: {}  
}


const Nav = ({isNavOpen, toggleNav})=> {
    const initialState = {
        links : [
            {name : "Home", id: "home"},
            {name : "About", id: "about"},
            {name: "Projects", id : "projects"},
            
        ]
    }
const [state] = useState(initialState) 

 const   displayLinks = () => {
        return state.links.map(link => {
            return (
                <motion.li 
                    key={link.id}
                    className="SideNav__list-item"
                    variants={liVariants}
                >
                    <a href={`#${link.id}`} className="SideNav__link" onClick={toggleNav}>
                        {link.name}
                    </a>
                </motion.li>
            )
        })
    }


        return (
            <motion.nav 
                className="SideNav"
                variants={variants}
                initial="closed"
                animate={isNavOpen ? "open" : "closed"}
                transition={{damping: 800}}
            >
                <button onClick={toggleNav} className="SideNav__close-btn">
                    <img src={closeBtn} alt=''/>
                </button>
                <motion.ul 
                    className="SideNav__list" 
                    variants={ulVariants}
                >
                    {displayLinks()}
                    <motion.li 
                        className="SideNav__list-item"
                        variants={liVariants}
                    >   
                        <Link to="/contact" className="SideNav__link" onClick={toggleNav}>
                            Contact
                        </Link>
                    </motion.li>
                    <motion.li 
                        className="SideNav__list-item"
                        variants={liVariants}
                    >   
                        <Link to="/resume" className="SideNav__link" onClick={toggleNav}>
                            Resume
                        </Link>
                    </motion.li>
                </motion.ul>
            </motion.nav>
        )
    }


    export default Nav;