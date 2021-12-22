import React from "react";
import "./resume.scss";
const Education = (props)=> {
  
    return (
      <div className="resume-grid">
        <div className="cell-4">
          <p>
            {props.startYear} - {props.endYear}
          </p>
        </div>
        <div className="cell-8">
          <h4 style={{ marginTop: "0px" }}>{props.schoolName}</h4>
          <p>{props.schoolDescription}</p>
        </div>
      </div>
    );
}

export default Education;
