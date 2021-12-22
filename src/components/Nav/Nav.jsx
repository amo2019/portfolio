import "./Nav.scss";
import hamburger from "../../assets/Images/hamburger.svg"
import {Link} from "react-router-dom"
import Waves from "../waves/Waves"

const  Nav = (props)=> {

        return (
            <nav  className={`Nav ${props.showBackgroundColor && "Nav--active"}`}>
                <Waves/>
                <div className={`Nav__container ${props.showBackgroundColor && "Nav__container--active"}`}>
                    <ul className="Nav__list">
                        <li className="Nav__list-home Nav__list-item--home">
                            <a href="#home" className={`Nav__link ${props.showBackgroundColor && "Nav__link--active"}`}>
                                Home
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <a href="#about" className={`Nav__link ${props.showBackgroundColor && "Nav__link--active"}`}>
                                About
                            </a>
                        </li>
                        <li className="Nav__list-item">
                            <Link to="/contact" className={`Nav__link ${props.showBackgroundColor && "Nav__link--active"}`} >
                                Contact
                            </Link>
                        </li>

                            <a href="#projects" className={`Nav__link Nav__list-item ${props.showBackgroundColor && "Nav__link--active"}`}>
                                Projects
                            </a>
                            <Link to="/resume" className={`Nav__link Nav__list-item ${props.showBackgroundColor && "Nav__link--active"}`} >
                                Resume
                            </Link>
                        <li className="Nav__list-item Nav__list-item--burger" onClick={props.toggleNav}>
                            <img src={hamburger} alt=""/>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    export default  Nav;
