import React from "react";
import "../css/navbar.css"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="space_between navlink">
          <a className="homeLink" href="/">
            Textutils
          </a>
        </div>
      </nav>
    </>
  );
}