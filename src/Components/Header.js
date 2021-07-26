import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Header = ({ flag, input }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand me-2 text-light" to="">
            React-website
          </Link>

          <button
            className="navbar-toggler text-light"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className="collapse navbar-collapse text-light"
            id="navbarButtonsExample"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link px-3 me-2">
                <Link className="nav-link" to="/login">
                    {() => flag?<Redirect to="/" />:<h1>Welcome {input}</h1>}
                </Link>
              </button>
              <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
              <Link
                className="btn btn-dark px-3"
                href="https://github.com/mdbootstrap/mdb-ui-kit"
                role="button"
              >
                <i className="fas fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
