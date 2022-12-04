import React from "react"

import ContactForm from "../components/Home/ContactForm"
import Presentation from "../components/Home/Presentation"
import Footer from "../components/Home/Footer"
import Header from "../components/Home/Header"
import ScrollToTop from "../components/Home/ScrollToTop"
import SecondArticle from "../components/Home/SecondArticle"

const Home = () => {
  return (
    <>
      <Header className="v-slider-bloc"/>
      <Presentation/>
      <SecondArticle/>
      <ContactForm/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default Home
