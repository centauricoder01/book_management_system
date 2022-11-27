import axios from "axios";
import * as types from "./Action_type";

const Login = (payload) => (dispatch) => {
  dispatch({ type: types.GET_AUTH_REQUEST });
  return axios
    .post("https://reqres.in/api/login", payload)
    .then((res) => {
      console.log(res.data.token, "res.data");
      dispatch({ type: types.GET_AUTH_TOKEN, Token: res.data.token });
    })
    .catch(() => {
      dispatch({ type: types.GET_AUTH_ERROR });
    });
};

const PatchRequest = (payload) => (dispatch) => {
  console.log(payload, "payload");
  const parameter = {
    book_name: payload.nowEdit,
  };
  return axios
    .patch(`http://localhost:8080/books/${payload.params.id}`, parameter)
    .then((res) => console.log(res.data))
    .catch((err) => {
      console.log(err);
    });
};

export { Login, PatchRequest };
