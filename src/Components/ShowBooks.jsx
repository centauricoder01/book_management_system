import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowBooks = ({ bookData }) => {
  const location = useLocation();
  console.log(location, "location of showBooks");
  const Navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "4px",
          margin: "5px",
        }}
      >
        <Link to={`/books/${bookData.id}`}>
          <img
            src="https://wallpaperaccess.com/full/124378.jpg"
            alt="books"
            width={"100%"}
          />
        </Link>
        <p>Book Name : {bookData.book_name}</p>
        <p>Author : {bookData.author}</p>
        <p>Category : {bookData.category}</p>
        <p>Release Data : {bookData.release_year}</p>
        <button
          onClick={() => {
            Navigate(`/books/${bookData.id}/edit`, { state: location });
          }}
        >
          Edit Data
        </button>
      </div>
    </div>
  );
};

export default ShowBooks;
