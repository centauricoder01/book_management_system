import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowBooks from "../Components/ShowBooks";
import { Getbooks } from "../Data_Redux/Action";

const SingleBook = () => {
  const params = useParams();
  const books = useSelector((book) => book.Reducer.books);
  const [showData, setshowData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(Getbooks());
    }
  }, [books.length, dispatch]);

  useEffect(() => {
    if (params) {
      const singleBook_Data = books.find(
        (item) => item.id == Number(params.id)
      );
      singleBook_Data && setshowData(singleBook_Data);
    }
  }, [params, books]);

  return (
    <>
      <h1>SingleBook</h1>
      <div>
        <ShowBooks bookData={showData} />
      </div>
    </>
  );
};

export default SingleBook;
