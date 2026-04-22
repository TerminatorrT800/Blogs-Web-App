import { Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"
import Navbar from "../pages/Navbar"

export default function RootLayout() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="content">
        <Breadcrumbs/> 
        <Outlet />
      </div>
    </div>
  )
}
