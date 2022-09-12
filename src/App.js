import "./App.css"
import Routes from "./Routing"

import { ChakraProvider } from '@chakra-ui/react'
import ToggleMode from "./components/layouts/ToggleMode"

const App = () => {
  return (
    <ChakraProvider>
      <ToggleMode />
      <Routes/>
    </ChakraProvider>
  )
}

export default App
