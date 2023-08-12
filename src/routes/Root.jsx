import { Outlet } from "react-router-dom"
import { AuthContextProvider } from "../contexts/AuthContext"

import Navbar from "../components/Navbar"

function Root() {

  return (
    <AuthContextProvider>
      <Navbar />
      <Outlet />
    </AuthContextProvider>
  )
}

export default Root