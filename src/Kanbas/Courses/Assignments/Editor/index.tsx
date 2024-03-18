import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AssignmentState } from "../../../store";
import { addAssignment, updateAssignment } from "../reducer";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(addAssignment({ ...data, course: courseId }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleUpdate = () => {
    dispatch(updateAssignment(data));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const assignmentList = useSelector(
    (state: AssignmentState) => state.assignmentReducer.assignments
  );
  const assignment = assignmentList.find(
    (assignment) => assignment._id === assignmentId
  );
  const [data, setData] = useState({
    _id: assignment?._id,
    course: assignment?.course,
    description: assignment?.description,
    due_date: assignment?.due_date,
    until_date: assignment?.until_date,
    due_time: assignment?.due_time,
    points: assignment?.points,
    starting_date: assignment?.starting_date,
    title: assignment?.title,
    week: assignment?.week,
  });

  return (
    <div className="wd-assignment-edit">
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
            value={data?.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            className="form-control"
            id="assignmentName"
          />
        </div>
        <div className="mb-3">
          <textarea
            cols={30}
            rows={5}
            className="form-control"
            value={data?.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          ></textarea>
        </div>
        <div className="row my-2" style={{ marginRight: 0 }}>
          <div className="col-3 text-end">
            <label htmlFor="assignmentPoints" className="col-form-label">
              Points
            </label>
          </div>
          <div className="col-md-6 col-9">
            <input
              type="number"
              value={data?.points}
              onChange={(e) => setData({ ...data, points: e.target.value })}
              id="assignmentPoints"
              className="form-control"
            />
          </div>
        </div>
        <div className="row my-2" style={{ marginRight: 0 }}>
          <div className="col-3 text-end">
            <label htmlFor="assignmentGroup" className="col-form-label">
              Assignment Group
            </label>
          </div>
          <div className="col-md-6 col-9">
            <select id="assignmentGroup" className="form-select my-1">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <div className="row my-2" style={{ marginRight: 0 }}>
          <div className="col-3 text-end">
            <label htmlFor="assignmentPercentage" className="col-form-label">
              Display Grade as
            </label>
          </div>
          <div className="col-md-6 col-9">
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
        <div className="row" style={{ marginRight: 0 }}>
          <div className="col-3 text-end">
            <label htmlFor="assignmentAssign" className="col-form-label">
              Assign
            </label>
          </div>
          <div
            className="col-md-6 col-9 p-4 rounded-3"
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
              value={data?.due_date}
              onChange={(e) => setData({ ...data, due_date: e.target.value })}
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
                  value={data?.starting_date}
                  onChange={(e) =>
                    setData({ ...data, starting_date: e.target.value })
                  }
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
                  value={data?.until_date}
                  onChange={(e) =>
                    setData({ ...data, until_date: e.target.value })
                  }
                  id="assignmentAssignUntil"
                  className="form-control"
                />
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
          <div className="flex gap-1 flex-wrap">
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger"
            >
              Cancel
            </Link>
            <button
              className="btn btn-success ms-2"
              onClick={!assignment ? handleSave : handleUpdate}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AssignmentEditor;
