
import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="nav container">
      <div className="brand">
        <img className="logo" src="/logo.png" alt="Reality Realty logo"/>
        <span>Reality Realty</span>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <Link to="/" style={{ fontWeight: pathname === "/" ? 800 : 600 }}>Home</Link>
        <Link to="/apply" style={{ fontWeight: pathname === "/apply" ? 800 : 600 }}>Apply</Link>
      </div>
    </nav>
  );
}
