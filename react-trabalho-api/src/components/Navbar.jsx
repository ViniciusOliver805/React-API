import { Link } from "react-router-dom"

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={'/home'}>Products Home </Link>
        </h2>
        <ul>
            <li>
            <Link to={'/home'}>Home</Link>
            </li>
            <li>
            <Link to={'/new'} className="new-btn">New Product</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar