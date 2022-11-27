import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Getbooks } from "../Data_Redux/Action";
import ShowBooks from "./ShowBooks";
import { useSearchParams, useLocation } from "react-router-dom";

const Booklist = () => {
  const books = useSelector((book) => book.Reducer.books);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || books.length === 0) {
      let sortby = searchParams.get("sort");
      const getbooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortby && "release_year",
          _order: sortby,
        },
      };
      dispatch(Getbooks(getbooksParams));
    }
  }, [location.search]);
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {books.length > 0
          ? books.map((singleBook) => (
              <ShowBooks key={singleBook.id} bookData={singleBook} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Booklist;
