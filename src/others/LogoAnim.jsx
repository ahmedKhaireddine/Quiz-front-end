import React from "react"
import "./LogoAnimStyle.css"

const LogoAnim = () => {
    const logo = "QUIZ !!!"
    const logoAnim = logo.split()
    console.log(logoAnim)

  return (
      <div className="grid">
        {logo.split().map(index => {
           <div className="letter-anim">
                <span data-letter={index}>{index}</span>
            </div>
        })
        }
    </div>
  )
}

export default LogoAnim