/* eslint-disable no-unused-vars */
// import { useSelector, useDispatch } from "react-redux";
// import { addStudent } from "../reducers/studentSlice";
// import { useNavigate } from "react-router-dom";

// const StudentTable = () => {
//   const students = useSelector((state) => state.students.students);
//   console.log("students: ", students);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleAddUser = () => {
//     navigate(`/`);
//   };
//   const handleEdit = (id) => {
//     navigate(`/students/${id}`);
//   };
//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete student info?"
//     );

//     if (confirmDelete) {
//       const newData = students.filter((student) => student.id !== id);
//       dispatch(addStudent(newData));
//     }
//   };

//   const sortedStudents = [...students].sort((a, b) => a.id - b.id);

//   if (sortedStudents.length === 0) {
//     return (
//       <div className="flex flex-col items-center mt-4">
//         <p>No students available.</p>
//         <button
//           onClick={handleAddUser}
//           className="w-40 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-green-600"
//         >
//           Add Student
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-4">
//       <h2 className="mb-2 text-lg font-semibold text-center">Student Table</h2>
//       <div className="flex justify-center">
//         <table className="w-full border border-collapse table-auto">
//           <thead>
//             <tr>
//               <th className="p-2 border">Sr No.</th>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Roll Number</th>
//               <th className="p-2 border">Proof</th>
//               <th className="p-2 border">Address</th>
//               <th className="p-2 border">Gender</th>
//               <th className="p-2 border" colSpan={2}>
//                 Contacts
//               </th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//             <tr>
//               <th className="p-2 border"></th>
//               <th className="p-2 border"></th>
//               <th className="p-2 border"></th>
//               <th className="p-2 border"></th>
//               <th className="p-2 border"></th>
//               <th className="p-2 border"></th>
//               <th className="p-2 border">Type</th>
//               <th className="p-2 border">Number</th>
//               <th className="p-2 border"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedStudents.map((student) => (
//               <tr
//                 key={student.id}
//                 className={student.id % 2 === 0 ? "bg-gray-100" : ""}
//               >
//                 <td className="p-2 border">{student.id}</td>
//                 <td className="p-2 border">{student.name}</td>
//                 <td className="p-2 border">{student.rollNumber}</td>
//                 <td className="p-2 border">{student.checkbox.join(", ")}</td>
//                 <td className="p-2 border">{student.address}</td>
//                 <td className="p-2 border">{student.gender}</td>
//                 <td className="p-2 border">
//                   {student.contacts.map((contact, index) => (
//                     <div key={index}>{contact.type}</div>
//                   ))}
//                 </td>
//                 <td className="p-2 border">
//                   {student.contacts.map((contact, index) => (
//                     <div key={index}>{contact.number}</div>
//                   ))}
//                 </td>
//                 <td className="p-2 border">
//                   <button
//                     className="px-2 py-1 mr-1 text-white bg-blue-500 rounded"
//                     onClick={() => handleEdit(student.id)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="px-2 py-1 text-white bg-red-500 rounded"
//                     onClick={() => handleDelete(student.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           className="w-40 py-2 text-white bg-blue-500 rounded hover:bg-green-600"
//           onClick={handleAddUser}
//         >
//           Add Another Student
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentTable;

import React, { useState, useEffect } from "react";
// import { addStudent } from "../reducers/studentSlice";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from "@mui/material";

// import { useTable } from "react-table";

// const StudentDataDisplay = () => {
//   const [studentData, setStudentData] = useState([]);

//   const students = useSelector((state) => state.students.students);
//   console.log("students from Table: ", students);
//   console.log(students.id);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const existingData = students;
//     setStudentData(existingData);
//   }, []);

//   const data = React.useMemo(() => studentData, [studentData]);
//   console.log("data: ", data);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: "Name",
//         accessor: "name",
//       },
//       {
//         Header: "Roll Number",
//         accessor: "rollNumber",
//       },
//       {
//         Header: "Address",
//         accessor: "address",
//       },
//       {
//         Header: "Gender",
//         accessor: "gender",
//       },
//       {
//         Header: "Proof",
//         accessor: "proof",
//         Cell: ({ cell }) => cell.value.join(", "),
//       },
//       {
//         Header: "Contacts",
//         accessor: "contactSets",
//         Cell: ({ cell }) =>
//           cell.value ? (
//             cell.value.map((contact, index) => (
//               <div key={index}>
//                 {contact.type}: {contact.number}
//               </div>
//             ))
//           ) : (
//             <div>No Contacts</div>
//           ),
//       },
//       {
//         Header: "Actions",
//         accessor: "actions",
//         Cell: ({ row }) => (
//           <div>
//             <Button
//               variant="outlined"
//               color="primary"
//               onClick={() => handleEdit(row.original)}
//             >
//               Edit
//             </Button>
//             <Button
//               variant="outlined"
//               color="secondary"
//               onClick={() => handleDelete(row.original)}
//             >
//               Delete
//             </Button>
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const handleEdit = (rowData) => {
//     let idToEdit = rowData.id;
//     console.log("idToEdit: ", idToEdit);
//     navigate(`/students/${idToEdit}`);
//     console.log("Edit Clicked:", rowData);
//   };

//   const handleDelete = (rowData) => {
//     let idToDelete = rowData.id;
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete student info?"
//     );

//     if (confirmDelete) {
//       const newData = students.filter((student) => student.id !== idToDelete);
//       console.log("newData: ", newData);
//       dispatch(addStudent(newData));
//     }
//   };

//   const { getTableProps, headerGroups, rows, prepareRow } = useTable({
//     columns,
//     data,
//   });

//   const sortedStudents = [...students].sort((a, b) => a.id - b.id);

//   const handleAddUser = () => {
//     navigate(`/`);
//   };

//   if (sortedStudents.length === 0) {
//     return (
//       <div className="flex flex-col items-center mt-4">
//         <p>No students available.</p>
//         <button
//           onClick={handleAddUser}
//           className="w-40 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-green-600"
//         >
//           Add Student
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Student Data Display</h1>
//       <TableContainer component={Paper}>
//         <Table {...getTableProps()}>
//           <TableHead>
//             {headerGroups.map((headerGroup) => (
//               <TableRow {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <TableCell {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <TableRow {...row.getRowProps()}>
//                   {row.cells.map((cell) => (
//                     <TableCell
//                       {...cell.getCellProps()}
//                       style={{
//                         padding: "10px",
//                         border: "solid 1px gray",
//                         background: "papayawhip",
//                       }}
//                     >
//                       {cell.render("Cell")}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <button
//         className="w-40 py-2 text-white bg-blue-500 rounded hover:bg-green-600"
//         onClick={handleAddUser}
//       >
//         Add Another Student
//       </button>
//     </div>
//   );
// };

// export default StudentDataDisplay;

// /* eslint-disable no-unused-vars */
// import "./App.css";
// import StudentDetails from "./comonents/Forms/StudentDetails";
// import StudentDataDisplay from "./comonents/Table/StudentDataDisplay ";
// import Login from "./comonents/Authencation/Login";
// import DashboardLayout from "./comonents/layouts";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Navigate,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     index: true,
//     element: <Navigate to="/auth/login" replace={true} />,
//   },
//   {
//     path: "auth",
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
//   {
//     path: "/frm",
//     element: (
//       <DashboardLayout>
//         <StudentDetails />
//       </DashboardLayout>
//     ),
//   },
//   {
//     path: "/students",
//     element: (
//       <DashboardLayout>
//         <StudentDataDisplay />
//       </DashboardLayout>
//     ),
//   },
//   {
//     path: "/students/:id",
//     element: (
//       <DashboardLayout>
//         <StudentDetails />
//       </DashboardLayout>
//     ),
//   },
// ]);

// function App() {
//   return (
//     <>
//       <div className="wrapper">
//         <RouterProvider router={router} />
//       </div>
//     </>
//   );
// }

// export default App;
