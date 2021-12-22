import "./HomePage.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects"
import SideNav from "../../components/SideNav/SideNav";
import Nav from "../../components/Nav/Nav"

function HomePage() {


  const initialState = {
    isNavOpen : false,
    showBackgroundColor: false
}

  const [menuOpen,setMenuOpen] = useState(initialState)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if(window.scrollY > 550) {
        setMenuOpen({
          showBackgroundColor: true
        })
      } else {
        setMenuOpen({
          showBackgroundColor: false
        })
      }
    });
  }, [])


  const toggleNav = () => {
    setMenuOpen({
      isNavOpen: !menuOpen.isNavOpen,
      
    })
  }

 return (
      <div className="HomePage">
          <Nav 
            showBackgroundColor={menuOpen.showBackgroundColor}
            toggleNav = {toggleNav}
          />
          <SideNav 
            isNavOpen={menuOpen.isNavOpen}
            toggleNav = {toggleNav}
          />
          <Header/>
          <About/>
          <Projects/>
      </div>
    )
  }

export default HomePage;