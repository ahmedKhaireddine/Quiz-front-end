import React from "react"

import Navbar from "../components/Home/Navbar"
import Header from "../components/Home/Header"
import Presentation from "../components/Home/Presentation"
import ListSection from "../components/Home/ListSection"
import Contact from "../components/Home/Contact"
// import Footer from "../components/Home/Footer"
import Footer1 from "../tests/Footer1"
// import Footer2 from "../tests/Footer2"
import ScrollButton from "../components/Home/ScrollButton"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Presentation />
      <ListSection />
      <Contact />
      {/* <Footer /> */}
      <Footer1 />
      {/* <Footer2 /> */}
      <ScrollButton />    
    </>
  )
}

export default Home
