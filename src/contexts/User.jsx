import { createContext } from "react"

import { useLocalStorage } from "../hooks/useLocalStorage"

const UserContext = createContext({})

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null)

    const value = {
        user,
        setUser
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