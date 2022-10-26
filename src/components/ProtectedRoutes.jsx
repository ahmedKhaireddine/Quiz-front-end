import React from "react"
import { Navigate, Outlet } from "react-router-dom"

import { useLocalStorage } from "../hooks"

const ProtectedRoutes = (props) => {
  const [user]  = useLocalStorage("user", null)

  return user ? <Outlet/> : <Navigate to="/signin"/>
}

export default ProtectedRoutes