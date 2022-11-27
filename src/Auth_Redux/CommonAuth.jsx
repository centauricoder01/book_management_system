import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const CommonAuth = ({ children }) => {
  const isAuth = useSelector((Auth) => Auth.Auth_Reducer.isAuth);
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default CommonAuth;
