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

            <div id="logo">
                <a href="https://globalfutures.asu.edu/center-for-biodiversity-outcomes/" target="_blank">
                    <img src="/assets/icons/CBO_Social_Media_Logo.svg" alt="CBO Logo" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;