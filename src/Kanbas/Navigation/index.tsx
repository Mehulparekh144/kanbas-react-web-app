import React from "react";
import {
  FaBook,
  FaHistory,
  FaInbox,
  FaLaptop,
  FaQuestion,
  FaRegCalendarAlt,
  FaRegUserCircle,
  FaTachometerAlt,
} from "react-icons/fa";
import "./index.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    {
      label: "Dashboard",
      icon: <FaTachometerAlt className="fs-2 text-danger" />,
    },
    { label: "Courses", icon: <FaBook className="fs-2 text-danger" /> },
    {
      label: "Calendar",
      icon: <FaRegCalendarAlt className="fs-2 text-danger" />,
    },
    { label: "Inbox", icon: <FaInbox className="fs-2 text-danger" /> },
    { label: "History", icon: <FaHistory className="fs-2 text-danger" /> },
    { label: "Studio", icon: <FaLaptop className="fs-2 text-danger" /> },
    { label: "Help", icon: <FaQuestion className="fs-2 text-danger" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {link.icon} {link.label}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default KanbasNavigation;
