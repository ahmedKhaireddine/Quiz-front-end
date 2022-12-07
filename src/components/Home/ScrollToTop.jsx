import { useEffect, useState } from "react"

import { Arrow } from "../../styles/Home/ScrollToTopStyled"
import { IoIosArrowUp } from "react-icons/io"

const ScrollToTop = () => {

    const [backToTop, setBackToTop] = useState(false)
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) { 
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])
    
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTop && (
                <Arrow onClick={scrollUp}>
                    <IoIosArrowUp style={{ color:"white", fontSize:"40px"}}/>
                </Arrow>
            )}
        </>
    )
}

export default ScrollToTop