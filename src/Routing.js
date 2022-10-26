import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import { ROUTES_DATA } from "./constants"

const Routing = () => {
  return (
    <Router>
      <Routes>
        {ROUTES_DATA.map(({ element, path, children }, index) => {
          if (children) {
            return <Route key={index} path={path} element={element}>
              {children.map(({ element, path }, index)=> {
                return <Route key={index} exact path={path} element={element}/>
              })}
            </Route>
          }

          return <Route key={index} exact path={path} element={element}/>
        })}
      </Routes>
    </Router>
  )
}

export default Routing