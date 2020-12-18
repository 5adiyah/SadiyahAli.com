import React from 'react';
import Sadiyah from '../../images/sadiyah.png';
import { Link } from "gatsby"

export default function Navigation() {
    return (
        <header>
            <div className="hero home bg-offwhite triangle">
                <div className="img-wrapper">
                    <img src={Sadiyah} alt="Profile Headshot image of Author"/>
                </div>
                <div className="text-wrapper">
                    <p className="hero-subtitle">Software Engineer</p>
                    <h1>Sadiyah Ali</h1>
                    <button className="btn bg-blue white"><Link to="/contact">Contact</Link></button>
                </div>
            </div>
        </header>
    );
}