import React, { useState } from "react";
import {
  FaCaretDown,
  FaCheckCircle,
  FaEdit,
  FaEllipsisV,
  FaPlusCircle,
} from "react-icons/fa";
import "./index.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AssignmentState } from "../../store";
import { deleteAssignment, selectAssignment } from "./reducer";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector(
    (state: AssignmentState) => state.assignmentReducer.assignments
  );
  const assignment = useSelector(
    (state: AssignmentState) => state.assignmentReducer.assignment
  );
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  console.log(showDeleteModal);

  const handleConfirmDelete = () => {
    dispatch(deleteAssignment(assignment._id))
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

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
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments/123`}
            type="button"
            className="btn btn-danger"
          >
            + Assignments
          </Link>
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
            {assignmentList
              .filter((assignment) => assignment.course === courseId)
              .map((assignment) => (
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
                    {assignment.week} | Starting {assignment.starting_date} |
                    Due {assignment.due_date} at {assignment.due_time} |
                    {assignment.points} pts
                  </p>
                  <span className="float-end">
                    <button
                      className="btn btn-danger btn-sm px-2 rounded-2"
                      onClick={() => {
                        setShowDeleteModal(true)
                        dispatch(selectAssignment(assignment))
                      }}
                    >
                      Delete
                    </button>
                    <FaCheckCircle className="ms-2 text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </li>
              ))}
          </ul>
        </li>
      </ul>

      {showDeleteModal && (
        <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleCancelDelete}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete the assignment?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Assignments;
