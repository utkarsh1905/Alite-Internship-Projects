import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

ProtectedRoutes.propTypes = {
  children: PropTypes.node,
};

function ProtectedRoutes({ children }) {
  const isLoggedIn = localStorage.getItem("isLogedIn");

  if (isLoggedIn !== null && isLoggedIn) {
    return <>{children}</>;
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default ProtectedRoutes;
