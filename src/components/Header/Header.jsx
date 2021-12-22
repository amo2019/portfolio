import "./Header.scss"
import { HashLink as Link } from 'react-router-hash-link';

import arrowDown from "../../assets/Images/down.png"
import Waves from "../waves/Waves"

export default function Header() {
        return (
            <div className="Header" id="home">
                <div className="Header__container">
                    <div className="Header__heading-container">
                    <div className="Header__motion-box" >

                            <h3 className="Header__hello-msg">Hello World!</h3>
                            <h1 className="Header__name-msg">I'm Amin Omar</h1>
                            <h3 className="Header__position-msg">FRONTEND / BACKEND JAVASCRIPT WEB DEVELOPER</h3>

                            <div className="Header__social-media-container">
                                <div className="button-wrap linkedin">
                                    <a href="https://www.linkedin.com/in/amin-omar-515620218/" className="button-inner-wrap">
                                        <i className="icon-linkedin inactive"></i>
                                        <i className="icon-linkedin active"></i>
                                    </a>
                                </div>
                                <div className="button-wrap github">
                                    <a href="https://github.com/amo2019?tab=repositories" className="button-inner-wrap">
                                        <i className="icon-github inactive"></i>
                                        <i className="icon-github active"></i>
                                    </a>
                                </div>
                                <div className="Header__resume-btn-div">
                                <Link to="/resume" className="cta Header__resume-btn">
                                    <span className="link-btn-text">{`Resume`}</span>
                                </Link>
                                </div> 
                            </div>

                            <a href="#projects" className="cta Header__project-btn">
                                <span className="Header__btn-text">{`View My Work >`}</span>
                            </a>

                        </div>
                    </div>
                    <div className="Header__text-container">
                        <Waves show={true}/>
                    </div>
                </div>
                    <div className="Header__image-container">
                        <div className="Header__img">
                            <a href="#about">
                            <img  src={arrowDown} alt="" />
                            </a>
                        </div>
                    </div>
            </div>
        )
    }
