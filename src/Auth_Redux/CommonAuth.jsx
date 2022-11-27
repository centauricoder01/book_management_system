import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CommonAuth = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((Auth) => Auth.Auth_Reducer.isAuth);
  if (!isAuth) {
    return <Navigate to={"/login"} replace state={location} />;
  }
  return children;
};

export default CommonAuth;
