import React from 'react' 
import Search from '../UI/Search';
import './Navbar.css';


const Navbar = () =>{
    return(
        <nav>
            <ul className="nav-bar">
                <li>
                    <img src="https://libapps-au.s3-ap-southeast-2.amazonaws.com/accounts/22196/images/UNSPLASH-NOW.png" alt="logo" />
                </li>
                <li className="nav-search"><Search /></li>
            </ul>
        </nav>
    );
}

export default Navbar;