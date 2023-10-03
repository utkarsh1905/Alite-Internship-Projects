import { createAction } from "@reduxjs/toolkit";

export const addStudent = createAction("student/addStudent");

export const addStudentReducer = (state, action) => {
  state.students = action.payload;
};
