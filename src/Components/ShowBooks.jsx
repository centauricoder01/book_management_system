import React from "react";

const ShowBooks = ({ bookData }) => {
  return (
    <div>
      <div
        style={{
          border: "2px solid black",
          borderRadius: "4px",
          margin: "5px",
        }}
      >
        <img
          src="https://wallpaperaccess.com/full/124378.jpg"
          alt="books"
          width={"100%"}
        />
        <p>Book Name : {bookData.book_name}</p>
        <p>Author : {bookData.author}</p>
        <p>Category : {bookData.category}</p>
        <p>Release Data : {bookData.release_year}</p>
      </div>
    </div>
  );
};

export default ShowBooks;
