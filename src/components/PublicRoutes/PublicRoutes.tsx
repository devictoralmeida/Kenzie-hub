import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";

const PublicRoutes = () => {
  const { user } = useUserContext();

  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoutes;
