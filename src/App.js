import "./App.css"
import Routes from "./Routing"
import QuizInterface from "./pages/QuizInterface"

import { Box } from "@chakra-ui/react"
import ToggleMode from "./components/layouts/ToggleMode"
import QuizLayout from "./components/layouts/QuizLayout"

const App = () => {
  return (
    <Box>
      <QuizLayout>
          <ToggleMode />
          <QuizInterface/>
      </QuizLayout>
    </Box>
  )
}

export default App
