import React from "react"
import Header from "../components/dashboard/Header"

import FirstArticle from "../components/dashboard/FirstArticle"
import SecondArticle from "../components/dashboard/SecondArticle"
import ThirdArticle from "../components/dashboard/ThirdArticle"
import ContactForm from "../components/dashboard/ContactForm"

const Home = () => {
  return (
    <>
        <Header />
        <FirstArticle />
        <SecondArticle />
        <ThirdArticle />
        <ContactForm />
    </>
  )
}

export default Home
