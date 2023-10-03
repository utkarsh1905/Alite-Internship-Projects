import { createAction } from "@reduxjs/toolkit";

export const filterStudentData = createAction("student/filterStudentData");

export const filterStudentDataReducer = (state, action) => {
  const studentIdToDelete = action.payload;
  state.students = state.students.filter(
    (student) => student.id !== studentIdToDelete
  );
};
