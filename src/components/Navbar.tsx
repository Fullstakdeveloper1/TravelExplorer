import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="" alt="" />
        </Link>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tours">Tours</NavLink>
          <NavLink to="/categories">Cataegories</NavLink>
        </nav>
        <input type="text" className="search" placeholder="Search..." />
        <div className="user-profile">
          <h3>Admin 1</h3>
          <p>admin</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
