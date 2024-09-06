import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={footerStyle}>
        <p>&copy; 2024 Doob Portfolio. All rights reserved.</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#282c34',
    padding: '1rem',
    color: 'white',
    textAlign: 'center' as const,
    position: 'absolute' as const,
    width: '100%',
    bottom: '0',
};

export default Footer;