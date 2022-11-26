import axios from "axios";
import * as types from "./Action-type";

const getBookRequest = () => {
  return {
    type: types.GET_BOOK_REQUEST,
  };
};

const getBooksuccess = (payload) => {
  return {
    type: types.GET_BOOK_SUCCESS,
    payload,
  };
};

const getBookfailure = () => {
  return {
    type: types.GET_BOOK_FAILURE,
  };
};

// GETBOOK FUNCTION CALLED HERE

const Getbooks = (getbooksParams) => (dispatch) => {
  dispatch(getBookRequest());
  return axios
    .get("http://localhost:8080/books", getbooksParams)
    .then((res) => {
      dispatch(getBooksuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(getBookfailure());
    });
};

export { Getbooks };
