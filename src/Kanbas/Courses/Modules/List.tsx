import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="d-flex flex-wrap gap-1 w-100 justify-content-end">
        <button
          className="btn btn-light"
          style={{ backgroundColor: "lightgray" }}
        >
          Collapse All
        </button>
        <button
          className="btn btn-light"
          style={{ backgroundColor: "lightgray" }}
        >
          Expand All
        </button>
        <button
          className="btn btn-light"
          style={{ backgroundColor: "lightgray" }}
        >
          View Progress
        </button>
        <select
          className="btn btn-light"
          style={{ backgroundColor: "lightgray" }}
        >
          <i className="fa fa-check-circle"></i>
          <option value="">Publish All</option>
        </select>
        <button className="btn btn-danger">+ Module</button>
        <button
          className="btn btn-light"
          style={{ backgroundColor: "lightgray" }}
        >
          <FaEllipsisV />
        </button>
      </div>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
