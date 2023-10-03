// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   students: [],
// };

// const studentSlice = createSlice({
//   name: "form",
//   initialState,
//   reducers: {
//     addStudent: (state, action) => {
//       state.students = action.payload;
//     },
//     filterStudentData: (state, action) => {
//       const studentIdToDelete = action.payload;
//       state.students = state.students.filter(
//         (student) => student.id !== studentIdToDelete
//       );
//     },
//   },
// });

// export const { addStudent, filterStudentData } = studentSlice.actions;

// export default studentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { addStudent, addStudentReducer } from "./studentActions";
import {
  filterStudentData,
  filterStudentDataReducer,
} from "./studentFilterActions";

const initialState = {
  students: [],
};

const studentSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addStudent, addStudentReducer)
      .addCase(filterStudentData, filterStudentDataReducer);
  },
});

export { addStudent, filterStudentData };

export default studentSlice.reducer;
