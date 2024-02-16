import React from "react";
import {
  FaCaretDown,
  FaCheckCircle,
  FaEdit,
  FaEllipsisV,
  FaPlusCircle,
} from "react-icons/fa";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <>
      <div className="d-flex gap-2 justify-content-between flex-wrap">
        <input
          className="form-control wd-searchbar"
          placeholder="Search for Assignments"
        />
        <div className="d-flex flex-wrap gap-2 px-2">
          <button
            type="button"
            className="btn btn-light"
            style={{ backgroundColor: "lightgrey" }}
          >
            + Group
          </button>
          <button type="button" className="btn btn-danger">
            + Assignments
          </button>
          <select
            className="btn btn-light"
            style={{ backgroundColor: "lightgrey" }}
          >
            <option>Edit Assignment Dates</option>
          </select>
          <button
            className="btn btn-light"
            style={{ backgroundColor: "lightgrey" }}
          >
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="d-flex justify-content-between">
            <div>
              <FaEllipsisV />
              <FaCaretDown />
              ASSIGNMENTS
            </div>
            <div className="d-flex align-items-center">
              <button className="rounded-5 btn btn-outline-light border px-2 text-dark border-dark btn-sm">
                40% of Total
              </button>
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </div>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="ms-2" />
                <Link
                  className="text-decoration-none"
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  <FaEdit className="text-success" />
                  &nbsp;
                  {assignment.title}
                </Link>
                <br />
                <p className="my-2 text-muted">
                  {assignment.week} | Starting {assignment.starting_date} | Due{" "}
                  {assignment.due_date} at {assignment.due_time} |
                  {assignment.points} pts
                </p>
                <span className="float-end">
                  <FaCheckCircle className="ms-2 text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
