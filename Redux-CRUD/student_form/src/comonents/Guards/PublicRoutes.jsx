import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

PublicRoutes.propTypes = {
  children: PropTypes.node,
};

function PublicRoutes({ children }) {
  const isLogedIn = window.localStorage.getItem("isLogedIn");

  if (isLogedIn) {
    return <Navigate to="/frm" />;
  }
  return <>{children}</>;
}

export default PublicRoutes;
