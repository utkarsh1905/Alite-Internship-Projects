/* eslint-disable no-unused-vars */
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import StudentDetails from "./comonents/Forms/StudentDetails";
import StudentDataDisplay from "./comonents/Table/StudentDataDisplay ";
import Login from "./comonents/Authencation/Login";
import DashboardLayout from "./comonents/layouts";
import ProtectedRoutes from "./comonents/Guards/ProtectedRoutes";
import PublicRoutes from "./comonents/Guards/PublicRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Navigate to="/auth/login" replace={true} />,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
    ],
  },
  {
    element: (
      <ProtectedRoutes>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </ProtectedRoutes>
    ),
    children: [
      {
        path: "/frm",
        element: <StudentDetails />,
      },
      {
        path: "/students",
        element: <StudentDataDisplay />,
      },
      {
        path: "/students/:id",
        element: <StudentDetails />,
      },
    ],
  },
]);

export default router;
