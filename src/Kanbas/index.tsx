import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./Navigation";
import "./Navigation/index.css";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import { courses } from "./Database";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
  const [dashboardCourses, setDashboardCourses] = useState(courses);
  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "course.jpg",
  });
  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString() };
    setDashboardCourses([...dashboardCourses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setDashboardCourses(
      dashboardCourses.filter((course) => course._id != courseId)
    );
  };
  const updateCourse = () => {
    setDashboardCourses(
      dashboardCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <>
      <Provider store={store}>
        <div className="d-flex">
          <KanbasNavigation />
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={dashboardCourses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              <Route
                path="Courses/:courseId/*"
                element={<Courses courses={dashboardCourses} />}
              />
            </Routes>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default Kanbas;
