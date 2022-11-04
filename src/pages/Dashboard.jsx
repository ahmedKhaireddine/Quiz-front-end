import React from "react"

import Grid from "../components/layouts/Grid"
import SideBar from "../components/dashboard/SideBar"
import { UserContextProvider } from "../contexts"

const Dashboard = () => {
  return (
    <UserContextProvider>
      <Grid>
        <SideBar />
        <div
          style={{
            backgroundColor:"#f8f8fa",
            width:"100%",
            height:"100%"
          }}
        ></div>
      </Grid>
    </UserContextProvider>
  )
}

export default Dashboard
