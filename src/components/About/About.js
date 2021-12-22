import "./About.scss";
import my_image from "../../assets/Images/my_image.jpeg"
import AddMotionEffect from "../AddMotionEffect/AddMotionEffect"

export default function About() {
        return (
            <div className="About" id="about">
                <div className="About__container">
                    <h3 className="About__heading">
                        About
                    </h3>
                    <div className="About__line"/>
                    <div className="About__about-container">
                        <div className="About__img-section-container">
                            <div >
                            <AddMotionEffect skill={{id:"44",img:my_image, shape: "circle", clink:"/contact"}}/>
                            
                            </div>
                        </div>
                        <div className="About__text-container">
                            <h3 className="About__text-heading">
                                About me!
                            </h3>
                            <p className="About__text-description">
                            With a Bachelor’s degree in Computer Science (Software programming),
                            I have programming experience with different programming languages, 
                            in the last three years hands-on using JavaScript (front and back-end frameworks) 
                            to design and build web applications. 
                            I am comfortable with using JavaScript/TypeScript, ReactJS, Redux, NodeJS, Express, GraphQL, MongoDB, and Postgres. You 
                            should check out my projects!
                             <br/>
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
