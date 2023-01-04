import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../features/user/userSlice";

const NotLoggedInRoutes = () => {
  const { user } = useSelector(selectUser);

  return user ? <Navigate to="/" /> : <Outlet />;
};

export default NotLoggedInRoutes;
