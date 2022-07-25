import React from "react";
import "./header.css";
import { FaReddit } from "react-icons/fa";

const Header = () => {
    return (
    <div className="header-container">
        <h1><FaReddit /> Reddit</h1>
        <div className="search">
            <input type="text" placeholder="Search..." />
        </div>
    </div>
    )
}

export default Header;