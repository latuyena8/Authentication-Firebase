
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div style={{ textAlign: 'center' }}>
            <p>Home page</p>
            <Link to="/sign-in">
                Sign In
            </Link>
        </div>
    );
}

export default HomePage;