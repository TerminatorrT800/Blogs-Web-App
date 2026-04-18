import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>React App</h1>
        <div className="links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create" style = {{ 
                
             }}>New Blog</NavLink>
        </div>
    </nav>);
}

export default Navbar;