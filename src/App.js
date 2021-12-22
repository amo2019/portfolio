import HomePage from "./pages/HomePage/HomePage"
import Resume from "./components/Resume/Resume"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/index"

import ProjectPage from "./pages/ProjectPage/ProjectPage"
import {Routes, Route} from "react-router-dom"

export default function App()  {
    return (
      <div>
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project/:id" element={<ProjectPage/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </div>
    )
  }
