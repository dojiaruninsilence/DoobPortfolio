import React from "react";
import { Link } from "react-router-dom";

import '../styles/header.scss';

const Header: React.FC = () => {
    return (
        <header style={headerStyle}>
            <nav>
                <ul style={navListStyle}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/web-development">Web Development</Link></li>
                    <li><Link to="/software-engineering">Software Engineering</Link></li>
                    <li><Link to="/art">Art</Link></li>
                    <li><Link to="/graphic-design">Graphic Design</Link></li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#282c34',
    padding: '1rem',
    color: 'white',
    textAlign: 'center' as const,
};

const navListStyle = {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: '0',
    margin: '0',
};

export default Header;