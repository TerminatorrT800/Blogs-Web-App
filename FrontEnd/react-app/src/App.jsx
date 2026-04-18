import Navbar from "./Navbar"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Create from "./pages/Create"
import BlogDetails from "./pages/BlogDetails"

function App() {
  console.log('app component rendered')
  return (
    <Router >
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element = {<BlogDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
