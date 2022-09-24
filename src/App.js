import { React, useContext } from "react"
import { Box, useColorModeValue } from "@chakra-ui/react"

import "./App.css"
import { AppContext, AppContextProvider } from "./contexts/App"
import QuizInterface from "./pages/QuizInterface"
import QuizLayout from "./components/layouts/QuizLayout"
import ToggleMode from "./components/layouts/ToggleMode"

const App = () => {
  // const { bg, color } = useContext(AppContext)
  const bg = useColorModeValue("#242233", "#e6e6e6")
  const color = useColorModeValue("#e6e6e6", "#242233")
  const borderColor = useColorModeValue("#e6e6e6", "#242233")
  console.log("bg =>", bg, "color =>", color)
  return (
    <AppContextProvider>
      <Box
        bg={bg}
        color={color}
        borderColor={borderColor}
      >
        <QuizLayout>
            <ToggleMode />
            <QuizInterface/>
        </QuizLayout>
      </Box>
    </AppContextProvider>
  )
}

export default App
