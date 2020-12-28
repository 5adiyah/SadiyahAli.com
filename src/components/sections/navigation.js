import React from 'react';
import Menubtn from '../../images/menubtn.svg';
import Menuclose from '../../images/menuclose.svg';
import { Link } from "gatsby"

export default function Navigation() {
    return (
      <div className="navigation">
          <div className="container">
              <div className="menu-bar bg-offwhite">
                  <img src={Menubtn} alt="Click to open the menu"/>
              </div>

              <div className="menu-wrapper bg-yellow">
                  <div className="menu-close">
                      <img src={Menuclose} alt="Click to close the menu"/>
                  </div>
                  <div className="menu">
                      <ul className="menu-links">
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/about">About</Link></li>
                          <li><Link to="/testimonials">Testimonials</Link></li>
                          <li><Link to="/blog">Blog</Link></li>
                          <li><Link to="/contact">Contact</Link></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    );
}