import React from "react"
// import { useState } from "react"

const ChoiceList = (props) => {

  const { choices, onClick } = props
  // const [active, setActive] = useState(false)

  // const answers = document.querySelectorAll(".answer")
  // console.log("Answers array :", answers)

  // const toggleActive = () => {
  //   setActive(!active)
  // }

  // console.log(active)


  // const answers = document.querySelectorAll(".answer")
  // console.log("Answers array :", answers)

  // answers.forEach(answer => {

  //   answer.addEventListener("click", () => {
  //     setActive(!active)
  //   })

  // })
  
  // ----------First method with toggle----------------
  
  // const answers = document.querySelectorAll(".answer")
  // console.log("Answers array :", answers)

  // answers.forEach(answer => {

  //   answer.addEventListener("click", () => {

  //       answer.classList.toggle("active")

  //   })

  // })

  // ----------Second method with add & remove----------------
  
  // const answers = document.querySelectorAll(".answer")
  // console.log("Answers array :", answers)

  // answers.forEach(answer => {

  //   answer.addEventListener("click", () => {
      
  //     if (answer.classList.contains("active")) {
  //       answer.classList.remove("active")
  //     } else {
  //       answer.classList.add("active")
  //     }

  //   })

  // })

  // ----------Third method only add----------------
  
  // const answers = document.querySelectorAll(".answer")
  // console.log("Answers array :", answers)

  // answers.forEach(answer => {

  //   answer.addEventListener("click", () => {
      
  //     if (answer.classList.contains("active")) {
  //       return
  //     } else {
  //       answer.classList.add("active")
  //     }

  //   })

  // })

  // ----------Test----------------

  // const answers = document.querySelectorAll(".answer")
  // console.log("Answers array :", answers)

  // answers.forEach(answer => {

  //   answer.addEventListener("click", () => {
  //     answer.classList.add("active")
  //   })


  // })

  const choicesItemsJsx = choices.map(({id, value, weight}, index) => {
    return <li
      className="answer"
      id={id}
      key={index}
      onClick={onClick}
    >{value}</li>
  })

  return <ul>{choicesItemsJsx}</ul>
}

ChoiceList.defaultProps = {
  choises: []
}

export default ChoiceList