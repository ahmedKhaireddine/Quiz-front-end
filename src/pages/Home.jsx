import React from "react"

import ContactForm from "../components/Home/ContactForm"
import FirstArticle from "../components/Home/FirstArticle"
import Footer from "../components/Home/Footer"
import Header from "../components/Home/Header"
import ScrollToTop from "../components/Home/ScrollToTop"
import SecondArticle from "../components/Home/SecondArticle"

const Home = () => {
  return (
    <>
      <Header className="v-slider-bloc"/>
      <FirstArticle/>
      <SecondArticle/>
      <ContactForm/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default Home
