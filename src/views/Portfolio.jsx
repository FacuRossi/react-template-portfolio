import React from 'react'
import Contact from '../components/Contact'
import About from '../components/About'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Company from '../components/Company'
import Team from '../components/Team'

function Portfolio() {
  document.documentElement.classList.remove('nav-open')
  React.useEffect(() => {
    document.body.classList.add('profile-page')
    return function cleanup() {
      document.body.classList.remove('profile-page')
    }
  })
  return (
    <>
      <Navbar />
      <div id="home">
        <Main />
      </div>
      <div className="main">
        <div className="section text-center" id="about">
          <About />
        </div>
        <div className="section text-center" id="company">
          <Company />
        </div>
        <div className="section section-dark text-center" id="team">
          <Team />
        </div>
        <div className="section landing-section" id="projects">
          <Projects />
        </div>
        <div className="section landing-section" id="contact">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio
