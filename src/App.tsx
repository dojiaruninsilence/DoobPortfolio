import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import WebDevelopment from './components/WebDevelopment';
import SoftwareEngineering from './components/SoftwareEngineering';
import Art from './components/Art';
import GraphicDesign from './components/GraphicDesign';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/web-development" element={<WebDevelopment />} />
                        <Route path="/software-engineering" element={<SoftwareEngineering />} />
                        <Route path="/art" element={<Art />} />
                        <Route path="/graphic-design" element={<GraphicDesign />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

const appStyle: React.CSSProperties  = {
    position: 'relative',
    minHeight: '100vh',
};

const mainContentStyle: React.CSSProperties = {
    paddingBottom: '2.5rem', // space for the footer
};

export default App;