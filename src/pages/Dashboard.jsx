import React from "react"

import { UserContextProvider } from "../contexts"

const Dashboard = () => {
  return (
    <UserContextProvider>
      <div>
        Dashboard
      </div>
    </UserContextProvider>
  )
}

export default Dashboard