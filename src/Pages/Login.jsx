import React, { useState } from "react";
import { Login as LoginFunc } from "../Auth_Redux/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const Navigater = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(LoginFunc({ email, password })).then(() => {
        Navigater("/");
      });
    }
  };

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          style={{
            display: "block",
            width: "20%",
            margin: "auto",
            height: "2rem",
            marginBottom: "10px",
          }}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          style={{
            display: "block",
            width: "20%",
            margin: "auto",
            height: "2rem",
            marginBottom: "10px",
          }}
        />
        <button type="submit">Submit Data</button>
      </form>
    </div>
  );
};

export default Login;
