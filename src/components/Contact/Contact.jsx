import React from "react";
// import logo from "../../assets/Images/IMG-AA.png";
import { HashLink as Link } from 'react-router-hash-link';
import "./Contact.scss"

const Contact = ()=> {

    return (
      <div className="contact-main">
          <Link to="/" className="contact-link-btn">
                  <span className="link-btn-text">{`Back Home`}</span>
          </Link>  
      <div className="contact-grid">
        <div className="mdl-cell-1">
          <h2>Amin Omar</h2>
          {/* <img src={logo} alt="avatar" className="about-image" /> */}
          <p className="description">
            I have programming experience with different programming languages, 
            in the last three years hands-on using JavaScript (front and back-end frameworks) 
            to design and implement web applications. 
            I am a hard worker and enjoy being challenged.
          </p>
        </div>
        <div className="mdl-cell-2">
          <h2 className="underline_contact">Contact</h2>
          <div className="contact-div">
            <div>
              <div>
                <div className="fa">
                  <i className="fa fa-mobile" aria-hidden="true" />
                  <p className="email">(171) 624-8897</p>
                </div>
              </div>

              <div>
                <div>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <p className="email">aminmail@protonmail.com</p>
                  <h3 className="underline_contact">Address</h3>
                  <p>Dresden 01309, Germany</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default Contact;
