import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="notfound-container">
            <h1>
                404 Not Found
            </h1>
            <Link to="/home">
                <p type="submit">
                    Go to Home
                </p></Link>
        </div>
    )
}
