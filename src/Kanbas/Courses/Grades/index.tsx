import { FaCog, FaFileExport, FaFileImport, FaFilter } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
      <div className="d-flex flex-wrap gap-2 me-2 mb-3 justify-content-end">
        <button
          className="btn btn-light"
          style={{ backgroundColor: "lightgrey" }}
          key="import-btn"
        >
          <FaFileImport /> Import
        </button>
        <div
          className="btn btn-light"
          style={{ backgroundColor: "lightgrey" }}
          key="export-btn"
        >
          <FaFileExport />
          <select
            className="btn btn-light border-0"
            style={{ backgroundColor: "lightgrey" }}
          >
            <option selected>Export</option>
          </select>
        </div>
        <button
          className="btn btn-light"
          style={{ backgroundColor: "lightgrey" }}
          key="settings-btn"
        >
          <FaCog />
        </button>
      </div>
      <div className="d-flex gap-2">
        <div className="mb-3 w-50">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            name=""
            id="studentName"
            className="form-control"
            placeholder="Search Students"
          />
        </div>
        <div className="mb-3 w-50">
          <label htmlFor="assignmentName" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            name=""
            id="assignmentName"
            className="form-control"
            placeholder="Search Assignments"
          />
        </div>
      </div>
      <button
        className="btn btn-light mb-3"
        style={{ backgroundColor: "lightgrey" }}
        key="apply-filters-btn"
      >
        <FaFilter /> Apply Filters
      </button>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th key="student-name-header">Student Name</th>
              {as.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment.user}>
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return (
                      <td key={assignment._id}>
                        {grade?.grade || ""}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
