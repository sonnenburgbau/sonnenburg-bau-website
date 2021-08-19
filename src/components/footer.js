import React from 'react'
import { Link } from 'gatsby';

const Footer = () => (
  <footer className="footer">
    <div className="container" style={{zIndex: 1}}>
          <nav className="navbar is-spaced">
            <Link className="navbar-item is-size-4 has-text-info" to="/kontakt">
              Kontakt
            </Link>
            <Link className="navbar-item is-size-4 has-text-info" to="/datenschutz">
              Datenschutzerklärung
            </Link>
            <Link className="navbar-item is-size-4 has-text-info" to="/impressum">
              Impressum
            </Link>
          </nav>
    </div>
  </footer>
);

export default Footer
