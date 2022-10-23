import Dashboard from "../pages/Dashboard"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"
import ProtectedRoutes from "../components/ProtectedRoutes"
import QuizInterface from "../pages/QuizInterface"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import Test from "../pages/Test"

const ROUTES_DATA = [
  {
    children: null,
    element: <Home/>,
    path: "/",
  },
  {
    children: null,
    element: <QuizInterface/>,
    path: "/game"
  },
  {
    children: [{
      element: <Dashboard/>,
      path: "dashboard"
    }],
    element: <ProtectedRoutes/>,
    path: "/"
  },
  {
    children: null,
    element: <Error404/>,
    path: "*"
  },
  {
    children: null,
    element: <SignIn/>,
    path: "/signin"
  },
  {
    children: null,
    element: <SignUp/>,
    path: "/signup"
  },
  {
    children: null,
    element: <Test/>,
    path: "/test"
  }
]

export default ROUTES_DATA