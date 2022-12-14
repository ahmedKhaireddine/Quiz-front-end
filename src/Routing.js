import React from "react"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Dashboard from "./pages/Dashborad"
import Error404 from "./pages/Error404"
import QuizInterface from "./pages/QuizInterface"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Test from "./pages/Test"

const routes = [
  {
    element: <QuizInterface/>,
    path: "/",
    name: "Quiz Interface"
  },
  {
    element: <Dashboard/>,
    name: "dashboard",
    path: "/dashboard"
  },
  {
    element: <Error404/>,
    name: "Error 404",
    path: "*"
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