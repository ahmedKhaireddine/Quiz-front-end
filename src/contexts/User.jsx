import { createContext, useState } from "react"

const User = createContext({})

const UserProvider = (props) => {

    const[user, setUser] = useState(null)

    const value = {
        user,
        setUser
    }

    return (
        <User.Provider value={value}>
            {props.children}
        </User.Provider>
    )
}

export {
    UserProvider,
    User
}