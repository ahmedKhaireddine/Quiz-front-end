import React from "react"
import Header from "../components/dashboard/Header"

import FirstArticle from "../components/dashboard/FirstArticle"
import SecondArticle from "../components/dashboard/SecondArticle"
import ThirdArticle from "../components/dashboard/ThirdArticle"

const Home = () => {
  return (
    <>
        <Header />
        <FirstArticle />
        <SecondArticle />
        <ThirdArticle />
    </>
  )
}

export default Home
