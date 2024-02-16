import React from "react";
import { useLocation } from "react-router";
import "./index.css";
import { Link } from "react-router-dom";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Assignments", "Grades"];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
      <ul className="wd-navigation">
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link) ? "wd-active" : ""}
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;
