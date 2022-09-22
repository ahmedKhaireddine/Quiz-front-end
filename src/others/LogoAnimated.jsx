import React from "react"

import { Grid, Letter, Span } from "./LogoAnimatedStyled"

const LogoAnimated = ({ color, href, margin, size, word }) => {
    const LogoItemsJSX = word.split("").map(index => {
        return (
            <Letter>
                <Span 
                    data-letter={index} 
                    color={color}
                    size={size}
                >
                    {index}
                    </Span>
            </Letter>
        )
    })

    return <Grid>{LogoItemsJSX}</Grid>
}

LogoAnimated.defaultProps = {
    color: "black",
    href: "#",
    margin: "0px",
    size: "100px",
    word: "Logo"
}

export default LogoAnimated


// return (
    
//     <div className="grid">
//       <div className="letter-anim">
//           <span data-letter="Q">Q</span>
//       </div>
//       <div className="letter-anim">
//           <span data-letter="U">U</span>
//       </div>
//       <div className="letter-anim">
//           <span data-letter="I">I</span>
//       </div>
//       <div className="letter-anim">
//           <span data-letter="Z">Z</span>
//       </div>
//       <div className="letter-anim">
//           <span data-letter="">&nbsp;</span>
//       </div>
//       <div className="letter-anim">
//           <span data-letter="!">!</span>
//       </div>
//       <div className="letter-anim">
//           <span data-letter="!">!</span>
//       </div>
//       <div className="letter-anim">
//           <span data-letter="!">!</span>
//       </div>
//     </div>
//   )