import { Outlet } from "react-router-dom"
import Navbar from "../pages/Navbar"

export default function RootLayout() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
