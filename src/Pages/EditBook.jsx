import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Getbooks } from "../Data_Redux/Action";
import { PatchRequest } from "../Auth_Redux/Action";

const EditBook = () => {
  const params = useParams();
  const getEditbook = useSelector((editBook) => editBook.Reducer.books);
  const dispatch = useDispatch();
  const [editdata, seteditData] = useState({});
  const [nowEdit, setNowEdit] = useState("");
  const Navigater = useNavigate();
  const Location = useLocation();

  useEffect(() => {
    if (getEditbook.length === 0) {
      dispatch(Getbooks());
    }
  }, [getEditbook.length, dispatch]);

  useEffect(() => {
    if (params) {
      let Edit = getEditbook.find((item) => item.id === Number(params.id));
      Edit && seteditData(Edit);
    }
  }, [params, getEditbook]);

  return (
    <>
      <h1>EditBook</h1>
      <p>
        Previous book name :{" "}
        <span style={{ fontWeight: "bold" }}>{editdata.book_name}</span>
      </p>
      <input
        type="text"
        defaultValue={editdata.book_name}
        onChange={(e) => {
          setNowEdit(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(PatchRequest({ nowEdit, params })).then(() => {
            alert("Book Name changed");
            Navigater(Location.state.pathname);
          });
        }}
      >
        Edit Name
      </button>
    </>
  );
};

export default EditBook;
