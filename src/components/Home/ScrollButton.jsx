import { useCallback } from "react"

import { useScrollToTop } from "../../hooks"
import { IoIosArrowUp } from "react-icons/io"
import { Arrow } from "../../styles/Home/ScrollToTopStyled"

const ScrollButton = () => {
    const visible = useScrollToTop()
    
    const scrollUp = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    return (
        <>
            {visible && (
                <Arrow onClick={scrollUp}>
                    <IoIosArrowUp color="white" fontSize={26}/>
                </Arrow>
            )}
        </>
    )
}

export default ScrollButton