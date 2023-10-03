// import { GoogleLogin } from "@react-oauth/google";

// const GoogleLoginComponent = () => {
//   const handleLoginSuccess = (credentialResponse) => {
//     console.log("Logged in successfully!", credentialResponse);
//   };

//   const handleLoginFailure = () => {
//     console.error("Login Failed");
//   };

//   return (
//     <GoogleLogin
//       onSuccess={handleLoginSuccess}
//       onError={handleLoginFailure}
//       clientId="YOUR_CLIENT_ID"
//       buttonText="Login with Google"
//       cookiePolicy="single_host_origin"
//     />
//   );
// };

// export default GoogleLoginComponent;

// import { useState, useEffect } from "react";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";

// function GoogleLoginComponent() {
//   const [user, setUser] = useState([]);
//   const [profile, setProfile] = useState([]);

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => setUser(codeResponse),
//     onError: (error) => console.log("Login Failed:", error),
//   });

//   useEffect(() => {
//     if (user) {
//       axios
//         .get(
//           `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
//           {
//             headers: {
//               Authorization: `Bearer ${user.access_token}`,
//               Accept: "application/json",
//             },
//           }
//         )
//         .then((res) => {
//           setProfile(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [user]);

//   const logOut = () => {
//     googleLogout();
//     setProfile(null);
//   };

//   return (
//     <div>
//       <h2>React Google Login</h2>
//       <br />
//       <br />
//       {profile ? (
//         <div>
//           <img src={profile.picture} alt="user image" />
//           <h3>User Logged in</h3>
//           <p>Name: {profile.name}</p>
//           <p>Email Address: {profile.email}</p>
//           <br />
//           <br />
//           <button onClick={logOut}>Log out</button>
//         </div>
//       ) : (
//         <button onClick={() => login()}>Sign in with Google 🚀 </button>
//       )}
//     </div>
//   );
// }
// export default GoogleLoginComponent;

import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginComponent() {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
export default GoogleLoginComponent;

/* eslint-disable no-unused-vars */
// import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
// import StudentDetails from "./comonents/Forms/StudentDetails";
// import StudentDataDisplay from "./comonents/Table/StudentDataDisplay ";
// import Login from "./comonents/Authencation/Login";
// import DashboardLayout from "./comonents/layouts";
// import ProtectedRoutes from "./comonents/Guards/ProtectedRoutes";
// import PublicRoutes from "./comonents/Guards/PublicRoutes";

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
//         element: (
//           <PublicRoutes>
//             <Login />
//           </PublicRoutes>
//         ),
//       },
//     ],
//   },
//   {
//     element: (
//       <ProtectedRoutes>
//         <DashboardLayout>
//           <Outlet />
//         </DashboardLayout>
//       </ProtectedRoutes>
//     ),
//     children: [
//       {
//         path: "/frm",
//         element: <StudentDetails />,
//       },
//       {
//         path: "/students",
//         element: <StudentDataDisplay />,
//       },
//       {
//         path: "/students/:id",
//         element: <StudentDetails />,
//       },
//     ],
//   },
//   // {
//   //   path: "/frm",
//   //   element: (
//   //     <ProtectedRoutes>
//   //       <DashboardLayout>
//   //         <StudentDetails />
//   //       </DashboardLayout>
//   //     </ProtectedRoutes>
//   //   ),
//   // },
//   // {
//   //   path: "/students",
//   //   element: (
//   //     <ProtectedRoutes>
//   //       <DashboardLayout>
//   //         <StudentDataDisplay />
//   //       </DashboardLayout>
//   //     </ProtectedRoutes>
//   //   ),
//   // },
//   // {
//   //   path: "/students/:id",
//   //   element: (
//   //     <ProtectedRoutes>
//   //       <DashboardLayout>
//   //         <StudentDetails />
//   //       </DashboardLayout>
//   //     </ProtectedRoutes>
//   //   ),
//   // },
// ]);

// export default router;
