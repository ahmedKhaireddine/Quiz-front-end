import React from "react"
import ReactDOM from "react-dom/client"
import { ColorModeScript  } from "@chakra-ui/react"
import { ChakraProvider } from "@chakra-ui/react"

import App from "./App"
import theme from "./theme"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
