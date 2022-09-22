import React from "react"
import "./LogoAnimStyle.css"

const LogoAnim = () => {
  return (
    <div className="grid">
      <div className="letter-anim">
          <span data-letter="Q">Q</span>
      </div>
      <div className="letter-anim">
          <span data-letter="U">U</span>
      </div>
      <div className="letter-anim">
          <span data-letter="I">I</span>
      </div>
      <div className="letter-anim">
          <span data-letter="Z">Z</span>
      </div>
      <div className="letter-anim">
          <span data-letter="">&nbsp;</span>
      </div>
      <div className="letter-anim">
          <span data-letter="!">!</span>
      </div>
      <div className="letter-anim">
          <span data-letter="!">!</span>
      </div>
      <div className="letter-anim">
          <span data-letter="!">!</span>
      </div>
    </div>
  )
}

export default LogoAnim


  // const logo = "QUIZ !!!"

  // return (
  //   <div className="grid">
  //     {logo.split().map(index => {
  //       return (
  //         <div className="letter-anim">
  //             <span data-letter={index}>{index}</span>
  //         </div>
  //         )
  //       })
  //       }
  //   </div>
  // )