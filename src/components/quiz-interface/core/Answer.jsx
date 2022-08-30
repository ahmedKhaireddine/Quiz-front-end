import { useState } from "react"

const Answer = (props) => {
    
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }
    console.log(active)

    return (
        <li onClick={toggleActive}></li>
    )
}

export default Answer