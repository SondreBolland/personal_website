import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Publications", path: "/publications" },
  { label: "Projects", path: "/projects" },
  { label: "Learning", path: "/learning" },
  { label: "A Nice Word", path: "/message" },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="nav-bar">
      {navItems.map(({ label, path }) => (
        <Link
          key={path}
          to={path}
          className={`nav-link ${location.pathname === path ? "active" : ""}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
