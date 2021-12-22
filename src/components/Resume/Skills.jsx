import React from "react";
import Progress from "./progress-bar/Progress-bar";

const Skills = (props)=> {
    return (

          <div className="flex-skills">
            <div style={{marginLeft: "10px", flex: "1" }}>
            {props.skill}{" "}
            </div>
            <div style={{flex: "2" }}>
            <Progress
              done={props.progress}
            />
            </div>
            
            {"  "}
          </div>
     
    );
}

export default Skills;
