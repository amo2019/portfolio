import "./AddMotionEffect.scss"
import {motion} from "framer-motion";
import "csshake";
import { HashLink as Link } from 'react-router-hash-link';
export default function AddMotionEffect ({skill}) {

   const displaySkillsCard = () => {
            return (
                 skill.clink!=="contact" ? (
                <a href={skill.clink} className="Motion__skill-card-container" to={`${skill.clink}`} style={skill.shape?{borderRadius:"50%"}:{borderRadius:"2%", width: "35rem", height: "20rem"}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src={skill.img} alt="" className="Motion__skill-img" style={{borderRadius: skill.shape? "50%":"2%"}}/>
                </a>
                 ):(
                <Link className="Motion__skill-card-container" to={`${skill.clink}`} style={skill.shape?{borderRadius:"50%"}:{borderRadius:"2%", width: "35rem", height: "20rem"}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src={skill.img} alt="" className="Motion__skill-img" style={{borderRadius: skill.shape? "50%":"2%"}}/>
                </Link>
                 )
            )
    }


        return (
            <motion.div 
                id="motion"
            >                    
                    <div className="Motion__skills-container">
                        {displaySkillsCard()}
                    </div>
            </motion.div>
        )
    }
