import { React, useContext } from "react"
import { Box, useColorModeValue } from "@chakra-ui/react"

import "./App.css"
import { AppContext, AppContextProvider } from "./contexts/App"
import QuizInterface from "./pages/QuizInterface"
import QuizLayout from "./components/layouts/QuizLayout"
import ToggleMode from "./components/layouts/ToggleMode"

const App = () => {
  // const { bg, color } = useContext(AppContext)
<<<<<<< HEAD
  const bg = useColorModeValue("#242233", "#ebebeb")
  const color = useColorModeValue("#ebebeb", "#242233")
=======
  const bg = useColorModeValue("#242233", "#e6e6e6")
  const color = useColorModeValue("#e6e6e6", "#242233")
  const borderColor = useColorModeValue("#e6e6e6", "#242233")
>>>>>>> 5980a0de396bdb48160e54213a3ee57adacaf729
  console.log("bg =>", bg, "color =>", color)
  return (
    <AppContextProvider>
      <Box
        bg={bg}
        color={color}
        borderColor={borderColor}
      >
<<<<<<< HEAD
        {/* <QuizLayout> */}
            <ToggleMode />
            <QuizInterface/>
        {/* </QuizLayout> */}
=======
        <ToggleMode />
        <QuizInterface/>
>>>>>>> 5980a0de396bdb48160e54213a3ee57adacaf729
      </Box>
    </AppContextProvider>
  )
}

export default App
