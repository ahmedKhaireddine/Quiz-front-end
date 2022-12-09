import React from "react"

import ContactForm from "../components/Home/ContactForm"
import Presentation from "../components/Home/Presentation"
import Footer from "../components/Home/Footer"
import Header from "../components/Home/Header"
import ScrollButton from "../components/Home/ScrollButton"
import ListSection from "../components/Home/ListSection"

const Home = () => {
  return (
    <>
      <Header/>
      <Presentation/>
      <ListSection/>
      <ContactForm/>
      <Footer/>
      <ScrollButton/>
    </>
  )
}

export default Home
