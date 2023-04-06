import React from "react"

import Grid from "../components/layouts/Grid"
import SideBar from "../components/dashboard/layouts/SideBar"
import SwitchView from "../components/dashboard/core/SwitchView"
import { UserContextProvider } from "../contexts"

const Dashboard = () => {
  return (
    <UserContextProvider>
      <Grid>
        <SideBar />
        <SwitchView />
      </Grid>
    </UserContextProvider>
  )
}

export default Dashboard

// import React from "react"

// import GridTest from "../components/layouts/GridTest"
// import SideBar from "../components/dashboard/layouts/SideBar"
// import SwitchView from "../components/dashboard/core/SwitchView"
// import { UserContextProvider } from "../contexts"

// const Dashboard = () => {
//   return (
//     <UserContextProvider>
//       <GridTest>
//         <SideBar />
//         <SwitchView />
//       </GridTest>
//     </UserContextProvider>
//   )
// }

// export default Dashboard
