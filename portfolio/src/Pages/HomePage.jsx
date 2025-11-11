import React, { useEffect } from 'react'

import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
function HomePage() {


  return (
   <>
   <Navbar />
   <About/>
   <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
   </>
  )
}

export default HomePage