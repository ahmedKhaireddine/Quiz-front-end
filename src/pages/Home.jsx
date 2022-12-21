import React from "react"

import Navbar from "../components/home/Navbar"
import Header from "../components/home/Header"
import Presentation from "../components/home/Presentation"
import ListSection from "../components/home/ListSection"
import Contact from "../components/home/Contact"
import Footer from "../components/home/Footer"
// import Footer1 from "../components/home/Footer"
// import Footer2 from "../tests/Footer2"
import ScrollButton from "../components/home/ScrollButton"

const Home = () => {

  return (
    <>
      <Navbar />
      <Header />
      <Presentation id="presentation"/>
      <ListSection />
      <Contact />
      <Footer />
      {/* <Footer1 /> */}
      {/* <Footer2 /> */}
      <ScrollButton />    
    </>
  )
}

export default Home
