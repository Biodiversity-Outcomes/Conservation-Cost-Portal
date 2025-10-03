import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <ul id="navbar">
                <li><Link to="/">About</Link></li>
                <li><Link to="/collecting">Collecting</Link></li>
                <li><Link to="/reporting">Reporting</Link></li>
                <li><Link to="/studies_data">Studies and Data</Link></li>
                <li><Link to="/tutorials">Tutorials</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;