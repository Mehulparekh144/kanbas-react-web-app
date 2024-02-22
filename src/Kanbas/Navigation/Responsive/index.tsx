import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  FaBars,
  FaBook,
  FaCaretDown,
  FaCheckSquare,
  FaEye,
  FaHistory,
  FaHome,
  FaInbox,
  FaLaptop,
  FaPencilAlt,
  FaPlug,
  FaQuestion,
  FaRegCalendarAlt,
  FaRegUserCircle,
  FaTachometerAlt,
} from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./index.css";

function ResponsiveNavigation() {
  const [isOpen, setisOpen] = useState<boolean>(false);
  const [isCaretDown, setisCaretDown] = useState<boolean>(false);
  const { courseId } = useParams();
  const courseLinks = [
    { title: "Home", icon: <FaHome /> },
    { title: "Modules", icon: <FaBook /> },
    { title: "Piazza", icon: <FaPlug /> },
    { title: "Assignments", icon: <FaPencilAlt /> },
    { title: "Grades", icon: <FaCheckSquare /> },
  ];
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
    <>
      {isOpen ? (
        <div className="w-100">
          <div className="mb-4 p-3 w-100 d-flex justify-content-end">
            <IoClose
              style={{ color: "grey", cursor: "pointer" }}
              onClick={() => setisOpen(false)}
            />
          </div>
          <ul className="wd-kanbas-navigation-responsive">
            {links.map((link, index) => (
              <li
                key={index}
                className={pathname.includes(link.label) ? "wd-active" : ""}
                onClick={() => setisOpen(false)}
              >
                <Link to={`/Kanbas/${link.label}`}>
                  {link.icon} {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div className="d-md-none d-flex justify-content-between align-items-center wd-responsive-navigation p-2 bg-black">
            <div>
              <FaBars
                className="text-white"
                style={{ cursor: "pointer" }}
                onClick={() => setisOpen(true)}
              />
            </div>
            <div className="text-center text-white mt-2">
              <h6>CS5610.12631.202410</h6>
              <p>Modules</p>
            </div>
            <div>
              <FaEye className="text-white" />
              {isCaretDown ? (
                <IoClose
                  style={{ cursor: "pointer" }}
                  className="text-white"
                  onClick={() => setisCaretDown(false)}
                />
              ) : (
                <FaCaretDown
                  style={{ cursor: "pointer" }}
                  className="text-white"
                  onClick={() => setisCaretDown(true)}
                />
              )}
            </div>
          </div>
          {isCaretDown && (
            <div className="wd-navigation-responsive-content">
              <ul>
                {courseLinks.map((link, index) => (
                  <li key={index} onClick={() => setisCaretDown(false)}>
                    <Link to={link.title}>
                      {link.icon} {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default ResponsiveNavigation;
