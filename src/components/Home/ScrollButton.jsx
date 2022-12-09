import { useCallback } from "react"

import { useScrollToTop } from "../../hooks"
import { Arrow } from "../../styles/Home/ScrollToTopStyled"
import { IoIosArrowUp } from "react-icons/io"

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