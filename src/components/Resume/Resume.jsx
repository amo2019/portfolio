import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import { HashLink as Link } from 'react-router-hash-link';
import Skills from "./Skills";
import "./resume.scss";

const Resume = ()=> {
    return (
      <div id="main">
          <Link to="/" className="link-btn">
                  <span className="link-btn-text">{`Back Home`}</span>
          </Link>  
        <div style={{ textAlign: "left" }}>
          <h2 className="h2-mt">Experience</h2> 
          <Experience
            startYear={2020}
            endYear={2021}
            jobName="Current Activity"
            jobDescription="During this period I have built a variety of web applications (frontend/backend), I have used: Vanilla JavaScript, React.js, React-Redux, Node.js, Express-Node.js, and Nest.js, in addition to using different Databases such as MongoDB, PostgreSQL, and GraphQL.
            currently, I am working on a few side projects using React.js, Nest.js, and Node.js. And accept freelance work."
          />
          <Experience
            startYear={2019}
            endYear={2020}
            jobName="JavaScript Frontend / Backend Developer"
            jobDescription="Completed comprehensive web development Bootcamp successfully, including hands-on practice, extensive courses, books, and articles to gain technical profeciency.
            And attended courses such as JavaScript, React-Redux, Redux-Saga, NodeJS, CSS3, HTMML, Docker and Kubernetes, AWS, GraphQL, Typescript, PWA, GitTub in addition to many other web techs. I have built APIs in Node.js Master Class with no frameworks and dependencies and integrated with Sandbox of Stripe.com to accept payments."
          />
              
           <hr/>
          <Experience
            startYear={6.2016}
            endYear={10.2016}
            jobName="technical support"
            jobDescription="WBS TRAINING AG as a programmer and technical support: 
            designed and built Excel sheets project for the trainees in the company include: complex statistical formulas to solve a specific problems, generate automatic Reports and Graphs using Macros.
            joining the local network to the main server, downloading and setting up training software and troubleshooting the network.
            in addition to troubleshooting, and fix problems with the network, computers and printers in the training classrooms. "
          />
          <hr/>
          <Experience
            startYear={2013}
            endYear={2014}
            jobName="Software Programmer"
            jobDescription="Job within FutureGate for teaching and training: teach programming langauges and build apps for public and private sectors."
          />
          <hr/>
          <Experience
            startYear={2010}
            endYear={2012}
            jobName="Job as technical support"
            jobDescription="Job as technical support, Training and guiding NID/e-Passport staff, troubleshooting Issues related to network, database, and server room within GIT (Global Information Technology)."
          />
         <hr/>
          <Experience
            startYear={2009}
            endYear={2010}
            jobName="Software Programmer"
            jobDescription="Job in the Ministry of Health as Director of Information and Statistics Department and Software Programmer, I have programmed Applications for statistical data and training end-users, and applications for digital archiving (Delphi Language). 
Developed High-Performance Applications for Private Sectors, Developed interfaces to various merchandise management systems (Delphi, C# languages)."
          />
          <hr/>
          <Experience
            startYear={2006}
            endYear={2008}
            jobName="Software Programmer"
            jobDescription="Job in the African Oncology Institute as Software Programmer / Sabrata-Libya. Developed local network applications to access a databases via SQL queries with user-friendly interfaces, Designing and Programming applications for Main Stock management, chemical storehouses, Pharmacy, Statistics, Reception, Archives, Employees, Cancer Registration, Applications of Epidemiology (ICD-10 Coding System) those speed up the work with high accuracy by applying strict rules on the back and front end, editable auto-completion rules, to avoid human mistakes and application for digital archiving (Delphi Language)"
          />
          <hr/>
          <Experience
            startYear={2001}
            endYear={2005}
            jobName="Software Programmer"
            jobDescription="Job in the Municipal House as Software Programmer / Sabrata-Libya. designed and programmed applications for collecting citizens' info, Municipal House Employees (Delphi Language)."
          />
          <hr/>
          <h2 className="h2-mt">Education</h2>

          <Education
            startYear={1994}
            endYear={1999}
            schoolName="My University"
            schoolDescription="I hold a BSc in Software Programming From the University of Tripoli (1999) 
          Graduate Project: Word processor and Spell Checker, that include solving the problem of DOS memory limitation, by using linked lists, very quick hashing table algorithms to simulate the human method of direct searching through Dictionaries (slicing) in addition to coding functions for pagination, garbage collectors, transforming large documents into dictionaries, debugger and Unicode encoding (C Language)."
          />

          <hr/>


          <h3 className="h2-mt">Additional Information</h3>
           <div className="skills-div"><p className="p-tag">Other Skills:</p> good knowledge of Operating Systems (Windows, macOS, Linux), networks, code
optimization  and hardware architecture.</div>
           <div className="skills-div"><p className="p-tag">Languages:</p> English, German and Arabic.</div>
           <div className="skills-div"><p className="p-tag">CAD:</p> CorelDRAW, Figma</div>

          <hr/>
          <h2 className="h2-mt">Skills Level</h2>
        <div>
          <Skills skill="javascript" progress={90} />
          <Skills skill="HTML/CSS" progress={90} />
          <Skills skill="NodeJS" progress={90} />
          <Skills skill="React" progress={90} />
        </div>
      </div>
    </div>
    );
}

export default Resume;
