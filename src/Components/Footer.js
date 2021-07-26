import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-lg-start">
        <div className="text-center p-3 text-light">
          © 2021 Copyright:
          <Link className="text-light" to="https://mdbootstrap.com /">
            React website
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
