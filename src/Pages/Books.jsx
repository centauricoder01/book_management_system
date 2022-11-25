import React from "react";
import Booklist from "../Components/Booklist";
import Filter from "../Components/Filter";

const Books = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "25%",
            border: "4px solid red",
            height: "100%",
          }}
        >
          <Filter />
        </div>
        <div
          style={{
            width: "75%",
            border: "4px solid blue",
            height: "100%",
          }}
        >
          <Booklist />
        </div>
      </div>
    </>
  );
};

export default Books;
