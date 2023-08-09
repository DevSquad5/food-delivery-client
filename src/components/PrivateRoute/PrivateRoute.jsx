import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "../../hooks/useAuthContext";

const PrivateRoute = ({ children }) => {
  const { token } = useAuthContext();
  const location = useLocation();
  if (token) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
