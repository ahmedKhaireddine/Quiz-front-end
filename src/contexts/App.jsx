import React from "react"
import { createContext } from "react"

import { useColorModeValue } from "@chakra-ui/react"

const AppContext = createContext({})

const AppContextProvider = ({ children }) => {
    const bg = useColorModeValue("blue", "#ebebeb")
    const { color, borderColor} = useColorModeValue("#ebebeb", "#242233")

    const value = {
        bg,
        color,
        borderColor
    }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export {
    AppContext,
    AppContextProvider
}