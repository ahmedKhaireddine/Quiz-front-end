import { createContext, useState } from "react"

import { useLocalStorage } from "../hooks"

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null)
    const [view, setView] = useState("Home")

    const value = {
        user,
        view,
        setUser,
        setView
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {
  UserContext,
  UserContextProvider
}