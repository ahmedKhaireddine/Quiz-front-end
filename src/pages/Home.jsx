import React from "react"

import ContactForm from "../components/dashboard/Home/ContactForm"
import FirstArticle from "../components/dashboard/Home/FirstArticle"
import Footer from "../components/dashboard/Home/Footer"
import Header from "../components/dashboard/Home/Header"
import ScrollToTop from "../components/dashboard/Home/ScrollToTop"
import SecondArticle from "../components/dashboard/Home/SecondArticle"
import ThirdArticle from "../components/dashboard/Home/ThirdArticle"

const Home = () => {
  return (
    <>
        <Header className="v-slider-bloc"/>
        <FirstArticle/>
        <SecondArticle/>
        <ThirdArticle/>
        <ContactForm/>
        <Footer/>
        <ScrollToTop/>
    </>
  )
}

export default Home
