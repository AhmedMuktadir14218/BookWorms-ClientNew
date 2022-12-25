import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <div className="noise"></div>
            <div className="overlay"></div>
            <div className="terminal">
            <h1>Error <span className="errorcode">404</span></h1>
            <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            <p className="output">Please try to <a href="#1">go back</a> or <a href="#2">return to the homepage</a>.</p>
            <p className="output">Good luck.</p>
            </div>
        </div>
    );
};

export default NotFound;