import React from "react";
import { courses } from "../Database";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="max-w-100 wd-kanbas-content">
      <h1>Dashboard</h1>
      <h2>Published Courses (12)</h2>
      <hr />
      <div className="row w-100">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ maxHeight: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
