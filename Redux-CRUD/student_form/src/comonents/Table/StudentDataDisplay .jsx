/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { filterStudentData } from "../../reducers/studentSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useTable } from "react-table";

const StudentDataDisplay = () => {
  const { students } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = students;
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Roll Number",
        accessor: "rollNumber",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Proof",
        accessor: "proof",
        Cell: ({ cell }) => cell.value.join(", "),
      },
      {
        Header: "Contacts",
        accessor: "contactSets",
        Cell: ({ cell }) =>
          cell.value ? (
            cell.value.map((contact, index) => (
              <div key={index}>
                {contact.type}: {contact.number}
              </div>
            ))
          ) : (
            <div>No Contacts</div>
          ),
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleEdit(row.original)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => handleDelete(row.original)}
            >
              Delete
            </Button>
          </Box>
        ),
      },
    ],
    []
  );

  const handleEdit = (rowData) => {
    navigate(`/students/${rowData.id}`);
  };

  const handleDelete = (rowData) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete student info?"
    );

    if (confirmDelete) {
      dispatch(filterStudentData(rowData.id));
    }
  };

  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  const handleAddUser = () => {
    navigate(`/frm`);
  };

  if (students.length === 0) {
    return (
      <div className="flex flex-col items-center mt-4">
        <p>No student Data available.</p>
        <button
          onClick={handleAddUser}
          className="w-40 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-green-600"
        >
          Add Student
        </button>
      </div>
    );
  }

  return (
    <Box
      sx={{
        margin: "2rem 0 0 0",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Student Data Display</h1>
        <TableContainer component={Paper}>
          <Table {...getTableProps()}>
            <TableHead>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <TableCell
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                          background: "papayawhip",
                        }}
                      >
                        {cell.render("Cell")}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <button
            className="w-40 py-2 text-white bg-blue-500 rounded hover:bg-green-600"
            onClick={handleAddUser}
          >
            Add Another Student
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default StudentDataDisplay;
