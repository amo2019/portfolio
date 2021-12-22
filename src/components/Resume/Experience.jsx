import React from "react";
import "./resume.scss";

const Experience = (props)=> {

    return (
      <div className="resume-grid">
        <div className="cell-4">
          <p>
            {props.startYear} - {props.endYear}
          </p>
        </div>
        <div className="cell-8">
          <h4 style={{ marginTop: "0px" }}>{props.jobName}</h4>
          <p>{props.jobDescription}</p>
        </div>
      </div>
    );
}

export default Experience;
