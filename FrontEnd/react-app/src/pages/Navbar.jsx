import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
    <nav className="navbar">
        <h1>React App</h1>
        <div className="links">
            <NavLink to="/blogs">Home</NavLink>
            <NavLink to="/create" >New Blog</NavLink>
            <NavLink to="/help" >Help</NavLink>
        </div>
    </nav>);
}

export default Navbar;