import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/authContext";

export default function RequiresAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const userToken = localStorage.getItem("token");
  if (userToken) {
    setIsLoggedIn(true);
  }

  console.log("hello", isLoggedIn);
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
