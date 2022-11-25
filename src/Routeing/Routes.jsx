import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "../Pages/Books";
import EditBook from "../Pages/EditBook";
import Login from "../Pages/Login";
import SingleBook from "../Pages/SingleBook";

const Routeing = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<SingleBook />} />
      <Route path="/books/:id/edit" element={<EditBook />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default Routeing;
