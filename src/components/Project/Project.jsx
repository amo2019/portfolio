import "./Project.scss";
import AddMotionEffect from "../../components/AddMotionEffect/AddMotionEffect"



export default function Project(props) {
        const {name, description, image, github, url, id} = props
        return (
            <div className="Project">
                <div className="Project__container">
                    <div className="underline">
                    <h4 className="hover hover-3">
                        {name}
                    </h4>
                    </div>
                    <p className="Project__description">
                        {description}
                    </p>
                    <AddMotionEffect skill={{id,img:image, clink:url}}/>

                       {/* <img src={image} alt="Image of laptop with blumber header" className="Project__img"/> */}

                    <div className="Project__btn-container">

                        <a href={github} rel="noopener noreferrer" className="Project__btn Project__btn--modal">
                           GitHub
                        </a>
                        <a href={url} className="Project__btn Project__btn--website">
                           View Website
                        </a>
                    </div>
                </div>
            </div>
        )
    }

