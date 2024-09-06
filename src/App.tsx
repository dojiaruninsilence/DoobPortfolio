import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.scss';

import Home from './components/Home';
import WebDevelopment from './components/WebDevelopment';
import SoftwareEngineering from './components/SoftwareEngineering';
import Art from './components/Art';
import GraphicDesign from './components/GraphicDesign';

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/web-development">Web Development</Link></li>
                    <li><Link to="/software-engineering">Software Engineering</Link></li>
                    <li><Link to="/art">Art</Link></li>
                    <li><Link to="/graphic-design">Graphic Design</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/software-engineering" element={<SoftwareEngineering />} />
                <Route path="/art" element={<Art />} />
                <Route path="/graphic-design" element={<GraphicDesign />} />
            </Routes>
        </Router>
    );
};

export default App;