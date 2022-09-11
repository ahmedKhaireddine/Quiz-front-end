import "./App.css"
import Routes from "./Routing"

import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Routes/>
    </ChakraProvider>
  )
}

export default App
