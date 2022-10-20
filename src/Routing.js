import React from "react"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import QuizInterface from "./pages/QuizInterface"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Test from "./pages/Test"

const routes = [
  {
    element: <Home/>,
    path: "/",
    name: "Home"
  },
  {
    element: <QuizInterface/>,
    path: "/game",
    name: "Quiz Interface"
  },
  {
    element: <SignIn/>,
    name: "signin",
    path: "/signin"
  },
  {
    element: <SignUp/>,
    name: "signup",
    path: "/signup"
  },
  {
    element: <Dashboard/>,
    name: "dashboard",
    path: "/dashboard"
  },
  // {
  //   element: <Error404/>,
  //   name: "Error 404",
  //   path: "*"
  // },
  {
    element: <Test/>,
    name: "test",
    path: "/test"
  }
]


const Routing = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({element, path}, index) => {
          return <Route key={index} exact path={path} element={element}/>
        })}
      </Routes>
    </Router>
  )
}

export default Routing