import { useState, useEffect } from "react"

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

    return backToTop
}

export default ScrollToTop