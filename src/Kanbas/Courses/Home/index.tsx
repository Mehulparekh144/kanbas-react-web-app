import {
  FaBan,
  FaBell,
  FaCalendar,
  FaCalendarAlt,
  FaCheckCircle,
  FaFileImport,
} from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";
import { Link } from "react-router-dom";
import { BiImport } from "react-icons/bi";
import { MdGpsFixed } from "react-icons/md";
import { IoBarChart } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";

function Home() {
  const statusLinks = [
    { name: "Import Existing Content", icon: <FaFileImport /> },
    { name: "Import from Commons", icon: <BiImport /> },
    { name: "Choose Home Page", icon: <MdGpsFixed /> },
    { name: "View Course Stream", icon: <IoBarChart /> },
    { name: "New Announcement", icon: <TfiAnnouncement /> },
    { name: "New Analytics", icon: <IoBarChart /> },
    { name: "View Course Notifications", icon: <FaBell /> },
  ];
  return (
    <div>
      <h2>Home</h2>
      <div className="d-flex">
        <div className="flex-fill">
          <ModuleList />
        </div>
        <div className="flex-grow-0 gap-2 mx-2 d-none d-lg-block">
          <h4>Course Status</h4>
          <div className="d-flex gap-2">
            <button
              className="btn btn-light d-flex align-items-center gap-1"
              style={{ backgroundColor: "lightgray" }}
            >
              <FaBan /> Unpublish
            </button>
            <button className="btn btn-success d-flex align-items-center gap-1">
              <FaCheckCircle />
              Published
            </button>
          </div>
          <ul className="list-group wd-status mb-4">
            {statusLinks.map((item) => (
              <Link
                to="#"
                key={item.name}
                className="list-group-item list-group-item-action"
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </ul>

          <div className="d-flex justify-content-between">
            <h5>Coming Up</h5>
            <Link
              to="#"
              className="wd-status-coming d-flex gap-2 align-items-center"
            >
              <FaCalendarAlt style={{ color: "gray" }} />
              View Calendar
            </Link>
          </div>
          <hr className="m-0" />
          <div className="mt-2">
            <div className="d-flex align-items-start gap-2">
              <FaCalendarAlt style={{ color: "gray" }} />
              <div>
                <a href="#" className="wd-status-coming">
                  Lecture
                </a>
                <p className="wd-status-coming-muted">
                  CS5600.12631.202410 Jan 26 at 11:45am
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2">
              <FaCalendarAlt style={{ color: "gray" }} />
              <div>
                <a href="#" className="wd-status-coming">
                  Quiz
                </a>
                <p className="wd-status-coming-muted">
                  CS5010.12631.202410 Feb 01 at 9:00am
                </p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-2">
              <FaCalendarAlt style={{ color: "gray" }} />
              <div>
                <a href="#" className="wd-status-coming">
                  Exam
                </a>
                <p className="wd-status-coming-muted">
                  CS5600.12631.202410 Feb 26 at 11:45am
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
