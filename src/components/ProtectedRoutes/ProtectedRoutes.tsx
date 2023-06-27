import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../providers/UserContext";

const ProtectedRoutes = () => {
  const { user } = useUserContext();

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
