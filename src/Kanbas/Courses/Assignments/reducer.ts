import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";


const initialState = {
  assignments: assignments,
  assignment: {
    _id : "123",
    title: "New Assignment 123",
    course: "RS101",
    week: "Week 2",
    starting_date: "2024-02-10",
    due_date: "02/26/2024",
    points: 150,
    due_time: "11:59am"
  }
}

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        {
          ...action.payload,
          _id: new Date().getTime().toString(),
        },
        ...state.assignments,
      ]
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter((assignment) => assignment._id != action.payload);
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  }
})

export const { addAssignment, deleteAssignment,
  updateAssignment, selectAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;