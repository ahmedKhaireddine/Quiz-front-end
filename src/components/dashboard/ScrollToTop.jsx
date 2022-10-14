import { useEffect, useState } from "react"

import { Arrow } from "../../styles/HomeDashboardStyled"
import arrowUp from "../../assets/icônes/arrow-up-solid.svg" 

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
                <Arrow className="appear" onClick={scrollUp}>
                    <img src={`${arrowUp}`} alt="flèche" className="icone" />
                </Arrow>
            )}
        </>
    )
}

export default ScrollToTop