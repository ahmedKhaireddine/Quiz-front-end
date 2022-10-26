import React from "react"
import Header from "../components/dashboard/Header"

import FirstArticle from "../components/dashboard/FirstArticle"
import SecondArticle from "../components/dashboard/SecondArticle"
import ThirdArticle from "../components/dashboard/ThirdArticle"
import ContactForm from "../components/dashboard/ContactForm"
import ScrollToTop from "../components/dashboard/ScrollToTop"
import Slider from "../components/dashboard/Slider"

const Home = () => {
  return (
    <>
        <Header className="v-slider-bloc"/>
        <FirstArticle/>
        <SecondArticle/>
        <ThirdArticle/>
        <ContactForm/>
        <Slider />
        <ScrollToTop/>
    </>
  )
}

export default Home
