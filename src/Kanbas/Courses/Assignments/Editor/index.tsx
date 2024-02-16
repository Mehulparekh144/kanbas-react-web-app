import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheck, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="w-75">
      <div className="d-flex justify-content-end align-items-center gap-2">
        <p className="m-0 text-success">
          <FaCheckCircle /> Published
        </p>
        <button
          className="btn btn-light"
          style={{ backgroundColor: "lightgrey" }}
        >
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <form action={`/Kanbas/Courses/${courseId}/Assignments`}>
        <div className="mb-3">
          <label htmlFor="assignmentName" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            value={assignment?.title}
            className="form-control"
            id="assignmentName"
          />
        </div>
        <div className="mb-3">
          <textarea cols={30} rows={5} className="form-control"></textarea>
        </div>
        <div>
          <div className="row my-2">
            <div className="col-3 text-end">
              <label htmlFor="assignmentPoints" className="col-form-label">
                Points
              </label>
            </div>
            <div className="col-6">
              <input
                type="number"
                value={assignment?.points}
                id="assignmentPoints"
                className="form-control"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-3 text-end">
              <label htmlFor="assignmentGroup" className="col-form-label">
                Assignment Group
              </label>
            </div>
            <div className="col-6">
              <select id="assignmentGroup" className="form-select my-1">
                <option selected>ASSIGNMENTS</option>
              </select>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-3 text-end">
              <label htmlFor="assignmentPercentage" className="col-form-label">
                Display Grade as
              </label>
            </div>
            <div className="col-6">
              <select id="assignmentPercentage" className="form-select my-1">
                <option selected>PERCENTAGE</option>
              </select>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Do not count this assignment towards final grade
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-end">
              <label htmlFor="assignmentAssign" className="col-form-label">
                Assign
              </label>
            </div>
            <div
              className="col-6 p-4 rounded-3"
              style={{ border: "1px solid lightgray" }}
            >
              <h6>
                <b>Assign to</b>
              </h6>
              <input
                type="text"
                id="assignmentAssign"
                className="form-control"
                value="Everyone"
              />
              <label htmlFor="assignmentAssignDue" className="col-form-label">
                Due
              </label>
              <input
                type="date"
                value={assignment?.due_date}
                id="assignmentAssignDue"
                className="form-control"
              />
              <div className="d-flex flex-wrap gap-1">
                <div>
                  <label
                    htmlFor="assignmentAssignAvail"
                    className="col-form-label"
                  >
                    Available from
                  </label>
                  <input
                    type="date"
                    value={assignment?.starting_date}
                    id="assignmentAssignAvail"
                    className="form-control"
                  />
                </div>
                <div>
                  <label
                    htmlFor="assignmentAssignUntil"
                    className="col-form-label"
                  >
                    Until
                  </label>
                  <input
                    type="date"
                    value={assignment?.due_date}
                    id="assignmentAssignUntil"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault2"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              Notify users that this content has been changed.
            </label>
          </div>
          <div>
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger"
            >
              Cancel
            </Link>
            <button className="btn btn-success ms-2" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AssignmentEditor;
